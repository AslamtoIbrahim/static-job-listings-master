import { useInfiniteJobList } from "../hook/useInfiniteJobList";
import Filter from "./Filter";
import ItemCard from "./ItemCard";

const Home = () => {
  const {
    data,
    fetchNextPage,
    isFetching,
    hasNextPage,
    isFetchingNextPage,
    status,
    error,
  } = useInfiniteJobList()

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
          className={`mb-8 cursor-pointer rounded-md bg-green-900 px-12 py-2 text-white hover:bg-gray-700 disabled:cursor-auto disabled:bg-gray-400/50 disabled:opacity-80 disabled:text-black/80
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
