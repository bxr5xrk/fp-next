export const stringifyOrder = (option: string) =>
  option === 'DATE' ? 'start_date' : 'price';

export const stringifyCategoriesToQuery = (categories: string[]) =>
  categories.map((i) => `categories_like=${i}`).join('&');
