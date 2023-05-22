export const stringifyCategoriesToParam = (categories: string[]) =>
  categories.map((i) => `categories_like=${i}`).join('&');
