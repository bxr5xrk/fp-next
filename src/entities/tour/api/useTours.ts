import { Tour } from '../types/tour';

export const useTours = async (): Promise<Tour[]> => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + 'api/tours');

  return res.json();
};

export const useTourById = async (id: string): Promise<Tour> => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + 'api/tours/' + id);

  return res.json();
};
