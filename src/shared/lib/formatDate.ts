export const formatDate = (date: string): string => {
  const event = new Date(date);
  const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric' };

  return event.toLocaleDateString('uk-UA', options);
};
