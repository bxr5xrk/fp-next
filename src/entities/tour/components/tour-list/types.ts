export interface Tour {
  slug: string;
  image: string;
  title: {
    short: string;
    long: string;
  }
  dates: {
    start: string;
    end: string;
  }
  categories: string[];
}
