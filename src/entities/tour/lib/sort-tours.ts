import { SortingValue, Tour } from "../types";

export function sortTours(tours: Tour[], sorting: SortingValue | null) {
  if (!sorting) {
    return tours;
  }

  const { type, order } = sorting;

  const keys: string[] = type.split('.');

  return [...tours].sort((a, b) => {
    let valueA: any = a;
    let valueB: any  = b;

    for (let i = 0; i < keys.length; i++) {
      valueA = valueA[keys[i]];
      valueB = valueB[keys[i]];
    }

    if (order === 'asc') {
      return String(valueA).localeCompare(String(valueB));
    } else {
      return String(valueB).localeCompare(String(valueA));
    }
  });
}
