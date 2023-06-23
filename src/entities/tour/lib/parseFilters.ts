import { Tour } from '@/entities/tour';

const mockedTour: Tour = {
  id: 1,
  title: '',
  extended_title: '',
  price: 1,
  additional_price: 1,
  description: '',
  images: [],
  start_date: '',
  end_date: '',
  categories: [],
  attractions: '',
};

export type Filters = Record<string, string[]>;

export const parseFilters = (searchParams: URLSearchParams) => {
  const filters: Filters = {};

  searchParams.forEach((i, key) => {
    const value = decodeURIComponent(i).toLowerCase();

    // check if key valid
    if (key in mockedTour) {
      if (filters.hasOwnProperty(key)) {
        filters[key] = [...filters[key], value];
      } else {
        filters[key] = [value];
      }
    }
  });

  return { filters };
};
