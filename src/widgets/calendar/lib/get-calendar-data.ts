import { Calendar, Tour } from "../types";
import { groupEventsByMonth } from "./group-events-by-month";

export const getCalendarData = (tours: Tour[]): Calendar => {
  const sortedTours = [...tours].sort((a, b) => a.startDate.localeCompare(b.startDate));

  return groupEventsByMonth(
    sortedTours
  );
};
