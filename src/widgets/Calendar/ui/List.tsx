'use client';

import { Calendar, Tour } from '@/entities/tour';
import { useTours } from '@/entities/tour/api/useTours';
import { formatDate } from '@/shared/lib';
import { smoothScroll } from '@/shared/lib/smoothScroll';
import Link from 'next/link';
import { groupEventsByMonth } from '../lib/groupEventsByMonth';

interface ListProps {
  handleClick: (i: number) => void;
}

const getCalendarConfig = (tours: Tour[]): Calendar => {
  const sortedTours = tours
    ? [...tours].sort((a, b) => a.start_date.localeCompare(b.start_date))
    : [];

  return groupEventsByMonth(
    sortedTours.map((i) => ({
      start_date: i.start_date,
      id: i.id,
      title: i.title,
    }))
  );
};

export default async function List({ handleClick }: ListProps) {
  const tours = await useTours();

  const calendarConfig = getCalendarConfig(tours);

  const onClickTour = (id: Pick<Tour, 'id'>['id']) => {
    handleClick(id);
    smoothScroll();
  };

  return (
    <ul className="flex flex-col divide-y overflow-hidden">
      {Object.keys(calendarConfig).map((month) => (
        <li className="space-y-2 p-3" key={month}>
          <h2 className="text-base font-semibold capitalize leading-6 text-gray-900">
            {month}
          </h2>

          <div className="ml-3">
            {calendarConfig[month].map((tour) => (
              <Link
                href={`/${tour.id}`}
                onClick={() => onClickTour(tour.id)}
                className="flex w-full flex-col space-y-1 rounded-md p-2 hover:bg-gray-100"
                key={tour.id}
              >
                <p className="text-gray-500">{formatDate(tour.start_date)}</p>
                <p className="truncate font-medium text-gray-900">
                  {tour.title}
                </p>
              </Link>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
