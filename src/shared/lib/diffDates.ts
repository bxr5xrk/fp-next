export const diffDates = (start: string, end: string) => {
  const date1 = new Date(start);
  const date2 = new Date(end);

  const diffTime = Math.abs(Number(date2) - Number(date1));
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return String(diffDays);
};
