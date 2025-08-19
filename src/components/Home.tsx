import { useInfiniteQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { fetchJobs } from "../api/fetchApi";
import { KeysContext } from "../store/KeysContext";
import Filter from "./Filter";
import ItemCard from "./ItemCard";

const Home = () => {
  const context = useContext(KeysContext);
  const {
    data,
    fetchNextPage,
    isFetching,
    hasNextPage,
    isFetchingNextPage,
    status,
    error,
  } = useInfiniteQuery({
    queryKey: ["jobs", context.keys] as [string, string[]],
    queryFn: fetchJobs,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const next = lastPage.nextPage;
      return lastPage.jobs[next] ? next : undefined;
    },
  });

  if (status === "error") {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="font-semibold text-red-500">{error.message}</p>
      </div>
    );
  }

  return (
    <div className="group relative top-30 xl:top-46">
      <section className="sticky top-0 z-10 empty:h-12">
        <Filter />
      </section>
      <section className="z-20 space-y-10 py-10 lg:space-y-4 xl:space-y-6">
        {status === "pending" && (
          <div className="flex h-96 items-center justify-center">
            <p className="font-semibold text-green-900">Loading...</p>
          </div>
        )}
        {data?.pages.map((p) =>
          p.jobs.map((j) => <ItemCard key={j.id} job={j} />),
        )}
      </section>
      <section className="flex w-full justify-center">
        <button
          disabled={isFetching || !hasNextPage}
          className={`mb-8 cursor-pointer rounded-md bg-green-900 px-12 py-2 text-white hover:bg-gray-700 disabled:cursor-auto disabled:bg-green-400/65 disabled:text-gray-950/70
            ${status === "pending"&& 'hidden'}`}
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
              ? "Load more"
              : "Nothing more to load"}
        </button>
      </section>
    </div>
  );
};

export default Home;
