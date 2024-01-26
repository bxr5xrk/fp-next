"use client";

import { TourItem } from "./components/tour-item";
import { filterTours } from "../../lib/filter-tours";
import { sortTours } from "../../lib/sort-tours";
import { Tour } from "../../types";
import { useCategoriesAndSorting } from "../../hooks/use-categories-and-sorting";

interface TourListProps {
  tours: Tour[];
}

export function TourList(props: TourListProps) {
  const { tours } = props;
  const { categories, sorting } = useCategoriesAndSorting();
  const filteredTours = filterTours(tours, categories);
  const sortedTours = sortTours(filteredTours, sorting);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
      {sortedTours.map((tour) => (
        <TourItem key={tour.slug} {...tour} />
      ))}
    </div>
  );
}