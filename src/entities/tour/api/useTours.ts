'use client';

import { getFilters, useFilters } from '@/app/entities/filters';
import { Tour } from '../types/tour';
import db from '../../../db.json';
import { filterTours } from '../lib/filterTours';
import { sortTours } from '../lib/sortTours';
import { stringifyOrder } from '../lib/query';

export const useTours = ({
  applyFilters,
}: {
  applyFilters?: boolean;
}): Tour[] => {
  const { orderBy: sortBy, categories } = useFilters(getFilters);

  if (!applyFilters) {
    return db.tours;
  }

  const orderType = 'asc';

  const { tours } = db;

  const filteredTours = filterTours(tours, categories);

  const sortedTours = sortBy
    ? sortTours(filteredTours, stringifyOrder(sortBy) as keyof Tour, orderType)
    : filteredTours;

  return sortedTours;
};

export const useTourById = (id: string): Tour => {
  const { tours } = db;

  const findTour = tours.find((i) => i.id === Number(id));

  return findTour ?? tours[0];
};
