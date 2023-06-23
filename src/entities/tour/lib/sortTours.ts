import { Tour } from '@/entities/tour';

function compareValues(a: Tour, b: Tour, sortBy: TourKey, orderType: string) {
  let comparison = 0;
  const valueA = a[sortBy];
  const valueB = b[sortBy];

  if (valueA > valueB) {
    comparison = 1;
  } else if (valueA < valueB) {
    comparison = -1;
  }

  return orderType === 'desc' ? comparison * -1 : comparison;
}

type TourKey = keyof Tour;

export const sortTours = (
  tours: Tour[],
  sortBy: TourKey,
  orderType: string
) => [...tours.sort((a, b) => compareValues(a, b, sortBy, orderType))];
