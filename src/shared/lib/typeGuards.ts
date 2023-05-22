export const isString = (
  value: string | string[] | undefined
): value is string => typeof value === 'string';
