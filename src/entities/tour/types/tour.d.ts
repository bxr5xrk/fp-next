export interface Tour {
  id: number;
  title: string;
  extended_title: string;
  price: number;
  additional_price: number;
  start_date: string;
  end_date: string;
  description: string;
  images: string[];
  categories: string[];
  attractions: string;
}

export type TourKeys = keyof Tour;

export interface CalendarItem
  extends Pick<Tour, 'start_date' | 'id' | 'title'> {}

export type Calendar = Record<string, CalendarItem[]>;
