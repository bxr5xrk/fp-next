import { Calendar, Tour } from "../types";

export function groupEventsByMonth(events: Tour[]): Calendar {
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
