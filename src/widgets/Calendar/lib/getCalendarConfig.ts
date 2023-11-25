import { Calendar } from '@/entities/tour';
import { groupEventsByMonth } from './groupEventsByMonth';
import { Tour } from '../ui/Calendar';

export const getCalendarConfig = (tours: Tour[]): Calendar => {
  const sortedTours = tours
    ? [...tours].sort((a, b) => b.startDate.localeCompare(a.startDate))
    : [];

  return groupEventsByMonth(
    sortedTours
  );
};
