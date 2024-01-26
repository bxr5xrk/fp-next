import { PortableTextBlock } from "sanity";

export interface Tour {
  images: string[];
  title: {
    short: string;
    long: string;
  };
  attractions?: string[];
  content: PortableTextBlock;
  price: {
    UAH: number;
    USD: number;
  }
  dates: {
    start: string;
    end: string;
  }
}
