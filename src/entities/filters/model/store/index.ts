'use client';

import { create } from 'zustand';
import { FiltersState, FiltersStore } from '../types/filters';

const initialState: FiltersStore = {
  categories: [],
  query: '',
  orderBy: 'DATE',
};

export const useFilters = create<FiltersState>()((set) => ({
  ...initialState,
  setCategories: (categories) =>
    set((state) => ({ categories: (state.categories = categories) })),
  setOrder: (orderBy) =>
    set((state) => ({ orderBy: (state.orderBy = orderBy) })),
  setQuery: (query) => set((state) => ({ query: (state.query = query) })),
}));

export const getFilters = (store: FiltersState) => store;
