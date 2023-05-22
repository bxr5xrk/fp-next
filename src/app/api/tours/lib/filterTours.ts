import { Tour, TourKeys } from '@/entities/tour';
import { Filters } from './parseFilters';

const arrayToLowerCase = (arr: string[]) => arr.map((i) => i.toLowerCase());

const arrayIncludesInAnotherArr = (arr1: string[], arr2: string[]): boolean =>
  !!arrayToLowerCase(arr1).filter((i) => arrayToLowerCase(arr2).includes(i))
    .length;

export const filterTours = (tours: Tour[], filters: Filters) =>
  tours.filter((tour) =>
    Object.entries(filters).every(([key, values]) => {
      const valuesByKey = tour[key.toLowerCase() as TourKeys];

      if (Array.isArray(valuesByKey)) {
        return arrayIncludesInAnotherArr(values, valuesByKey);
      } else {
        return values.includes(String(valuesByKey));
      }
    })
  );
