import { useQuery } from "@tanstack/react-query";
import { getResults } from "../service";

export function useResult() {
  return useQuery({
    queryKey: ["results"],
    queryFn: () => {
      return getResults();
    },
  });
}
