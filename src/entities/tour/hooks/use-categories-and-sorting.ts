import { useSearchParams } from "next/navigation";
import { SortingValue } from "../types";
import { getSortingValue } from "../lib/get-sorting-value";

export function useCategoriesAndSorting(): {
  categories: string[];
  sorting: SortingValue;
} {
  const searchParams = useSearchParams();
  const categories = searchParams.getAll("category");
  const sorting = getSortingValue(searchParams.get("sorting"));

  return { categories, sorting };
}