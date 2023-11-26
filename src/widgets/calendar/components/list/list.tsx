import { formatDate } from '@/shared/lib';
import Link from 'next/link';
import { Tour } from '../../types';
import { getCalendarData } from '../../lib/get-calendar-data';

interface ListProps {
  tours: Tour[];
}

export function List({ tours }: ListProps) {
  const calendarConfig = getCalendarData(tours);

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
                href={`/tours/${tour.slug}`}
                className="flex w-full flex-col space-y-1 rounded-md p-2 hover:bg-gray-200"
                key={tour.slug}
              >
                <p className="text-gray-500">{formatDate(tour.startDate)}</p>
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
