import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchJobs } from "../api/fetchApi";
import { useKeysContext } from "./useKeysContext";

export const useInfiniteJobList = () => {
    const context = useKeysContext()
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