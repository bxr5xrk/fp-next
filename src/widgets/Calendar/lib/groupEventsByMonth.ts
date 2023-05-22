import { CalendarItem, Calendar } from '@/entities/tour';

export const groupEventsByMonth = (events: CalendarItem[]) => {
  const groups: Calendar = {};
  events.forEach((event) => {
    const date = new Date(event.start_date);
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
