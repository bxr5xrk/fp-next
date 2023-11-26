export interface Tour {
  slug: string;
  startDate: string;
  title: string
}

export type Calendar = Record<string, Tour[]>;