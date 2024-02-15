import { formatPrice } from "@/shared/lib";
import { Tour } from "../../../types";
import { diffDates } from "@/shared/lib";
import { formatDate } from "@/shared/lib";

interface Stat {
  name: string;
  value: string;
}

export function getStats(tour: Tour): Stat[] {
  return [
    {
      name: 'Ціна',
      value: `${formatPrice(tour.price.USD, 'USD')}${Boolean(tour.price.UAH) ? (' + ' + formatPrice(tour.price.UAH, 'UAH')) : ''}`,
    },
    {
      name: 'Тривалість',
      value: diffDates(tour.dates.start, tour.dates.end) + ' днів',
    },
    {
      name: 'Дата',
      value: formatDate(tour.dates.start) + ' - ' + formatDate(tour.dates.end),
    },
  ];
} 