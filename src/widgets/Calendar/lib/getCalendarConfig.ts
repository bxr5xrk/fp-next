import { Calendar, Tour } from '@/entities/tour';
import { groupEventsByMonth } from './groupEventsByMonth';

export const getCalendarConfig = (tours: Tour[]): Calendar => {
  const sortedTours = tours
    ? [...tours].sort((a, b) => a.start_date.localeCompare(b.start_date))
    : [];

  return groupEventsByMonth(
    sortedTours.map((i) => ({
      start_date: i.start_date,
      id: i.id,
      title: i.title,
    }))
  );
};
