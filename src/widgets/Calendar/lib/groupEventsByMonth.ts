import { CalendarItem, Calendar } from '@/entities/tour';
import { Tour } from '../ui/Calendar';

export const groupEventsByMonth = (events: Tour[]) => {
  const groups: Calendar = {};
  events.forEach((event) => {
    const date = new Date(event.startDate);
    const month = date.toLocaleDateString('uk-UA', {
      month: 'long',
    });

    if (!groups[month]) {
      groups[month] = [];
    }

    groups[month].push(event);
  });
  return groups;
};
