import { useInfiniteQuery } from "@tanstack/react-query";
import { use } from "react";
import { fetchJobs } from "../api/fetchApi";
import { KeysContext } from "../store/KeysContext";

export const useInfiniteJobList = () => {
    const context = use(KeysContext)
    return useInfiniteQuery({
    queryKey: ["jobs", context.keys] as [string, string[]],
    queryFn: fetchJobs,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const next = lastPage.nextPage;
      return lastPage.jobs[next] ? next : undefined;
    },
  });
}