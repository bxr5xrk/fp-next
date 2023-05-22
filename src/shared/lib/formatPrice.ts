export const formatPrice = (price: number, currency: 'UAH' | 'USD') =>
  `${price}${currency === 'UAH' ? 'грн' : '€'}`;
