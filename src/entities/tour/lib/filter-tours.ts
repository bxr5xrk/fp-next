import { Tour } from "../types";

export function filterTours(tours: Tour[], categories: string[] | null | string): Tour[] {
  if (!categories || categories.length === 0 || typeof categories === 'string') {
    return tours;
  }

  return tours.filter((tour) => {
    const tourCategories = tour.categories.map((category) => category.slug);

    return categories.some((category) => tourCategories.includes(category));
  });
}