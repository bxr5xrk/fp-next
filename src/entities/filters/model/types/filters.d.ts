export interface FiltersStore {
  categories: string[];
  query: string;
  orderBy: string;
}

interface FiltersActions {
  setCategories: (action: string[]) => void;
  setQuery: (action: string) => void;
  setOrder: (action: string) => void;
}

export type FiltersState = FiltersStore & FiltersActions;
