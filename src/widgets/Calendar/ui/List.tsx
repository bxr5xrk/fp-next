'use client';

import { TourId } from '@/entities/tour';
import { useTours } from '@/entities/tour';
import { formatDate } from '@/shared/lib';
import { smoothScroll } from '@/shared/lib/smoothScroll';
import Link from 'next/link';
import { getCalendarConfig } from '../lib/getCalendarConfig';

interface ListProps {
  handleClick: (i: number) => void;
}

export default function List({ handleClick }: ListProps) {
  const tours = useTours({ applyFilters: false });

  const calendarConfig = getCalendarConfig(tours);

  const onClickTour = (id: TourId) => {
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
                href={`/tours/${tour.id}`}
                onClick={() => onClickTour(tour.id)}
                className="flex w-full flex-col space-y-1 rounded-md p-2 hover:bg-gray-200"
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
