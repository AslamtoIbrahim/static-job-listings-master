import { useInfiniteQuery } from "@tanstack/react-query";
import Filter from "./Filter";
import ItemCard from "./ItemCard";
import { fetchJobs } from "../api/fetchApi";
import { useState } from "react";

const Home = () => {
  const [search, setSearch] = useState("");
  const { data, fetchNextPage, isFetching , hasNextPage, isFetchingNextPage} = useInfiniteQuery({
    queryKey: ["jobs", search] as [string, string],
    queryFn: fetchJobs,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  console.log('pages',data?.pages);

  console.log('hasNextPage: ',hasNextPage);
  return (
    <div className="group relative top-30 xl:top-46">
      <section className="sticky top-0 z-10 empty:h-12">
        <Filter />
      </section>
      <section className="z-20 space-y-10 py-10 lg:space-y-4 xl:space-y-6">
         {
          data?.pages.map(p => p.jobs.map(j => <ItemCard key={j.id} job={j} />))
         }
      </section>
      <section className="w-full flex justify-center">
        <button disabled={isFetching || !hasNextPage} className=" bg-green-900 disabled:bg-green-400/65 text-white px-12 py-2 rounded-md  mb-8 " onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "Loading more...": hasNextPage ? "Load more" : "Nothing more to load"}
        </button>
      </section>
    </div>
  );
};

export default Home;
