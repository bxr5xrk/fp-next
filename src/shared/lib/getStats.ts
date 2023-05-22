import { Tour } from '@/entities/tour';
import { diffDates } from './diffDates';
import { formatDate } from './formatDate';
import { formatPrice } from './formatPrice';

export const getStats = (tour: Tour) => [
  {
    name: 'Ціна',
    value:
      formatPrice(tour.price, 'USD') +
      ' + ' +
      formatPrice(tour.additional_price, 'UAH'),
  },
  {
    name: 'Тривалість',
    value: diffDates(tour.start_date, tour.end_date) + ' днів',
  },
  {
    name: 'Дата',
    value: formatDate(tour.start_date) + ' - ' + formatDate(tour.end_date),
  },
];
