export const useCategories = (query: string) =>
  decodeURI(query)
    .slice(1) // remove ?
    .split('&')
    .flatMap((i) => i.split('category=').filter(Boolean));
