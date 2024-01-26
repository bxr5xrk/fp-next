import { sortingValues } from "@/shared/config";
import { SortingValue } from "../types";
import { parseSortingValue } from "./parse-sorting-value";

export function getSortingValue(value: string | string[] | undefined | null): SortingValue {
  if (typeof value === 'string') {
    return parseSortingValue(value);
  }

  const defaultSorting = sortingValues[0];

  return parseSortingValue(defaultSorting.key);
}