import { Calendar, Tour } from "../types";
import { groupEventsByMonth } from "./group-events-by-month";

export const getCalendarData = (tours: Tour[]): Calendar => {
  const sortedTours = tours.toSorted((a, b) => b.startDate.localeCompare(a.startDate));

  return groupEventsByMonth(
    sortedTours
  );
};