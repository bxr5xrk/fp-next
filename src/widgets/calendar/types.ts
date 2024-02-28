export interface Tour {
  slug: string;
  startDate: string;
  endDate: string;
  title: string
}

export type Calendar = Record<string, Tour[]>;