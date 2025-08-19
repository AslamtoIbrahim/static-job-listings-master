import axios from "axios";
import type { Job } from "../utils/types";
import type { QueryFunctionContext } from "@tanstack/react-query";

const LIMIT_ITEMS = 5;

export const fetchJobs = async ({
  queryKey,
  pageParam = 0,
}: QueryFunctionContext<[string, string[]]>): Promise<{
  jobs: Job[];
  nextPage: number;
}> => {
  const [, keys] = queryKey;
  const search = keys.join('|')
  const res = await axios.get(
    `https://689f1d4d3fed484cf8791773.mockapi.io/api/v1/jobs`,
    {params:{search, page: pageParam, limit: LIMIT_ITEMS}}
     
  );
  const nextPage = (pageParam as number) + 1;
  const data = res.data;

  return { jobs: data, nextPage };
};

 
