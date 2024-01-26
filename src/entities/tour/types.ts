export interface Tour {
  slug: string;
  image: string;
  price: {
    USD: number;
    UAH: number;
  },
  title: {
    short: string;
    long: string;
  }
  dates: {
    start: string;
    end: string;
  }
  categories: {
    slug: string;
    name: string;
  }[];
}

export interface SortingValue {
  type: string;
  order: string;
}