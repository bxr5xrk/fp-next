import { SortingValue } from "../types";

export function parseSortingValue(value: string): SortingValue {
  const values = value.toLowerCase().split('_');

  const type = values[0] === "dates" ? "dates.start" : "price.USD";
  const order = values[1];

  return {
    type,
    order,
  };
}