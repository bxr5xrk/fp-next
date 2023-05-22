'use client'

import { formatDate } from '@/shared/lib/formatDate';
import { smoothScroll } from '@/shared/lib/smoothScroll';
import Badge from '@/shared/ui/Badge/Badge';
import Image from 'next/image';
import Link from 'next/link';

interface ToursItemProps {
  id: number;
  image: string;
  categories: string[];
  title: string;
  extendedTitle: string;
  date: {
    start: string;
    end: string;
  };
}

export default function TourItem({
  id,
  image,
  categories,
  title,
  extendedTitle,
  date,
}: ToursItemProps) {
  return (
    <li className="group grid">
      <Link onClick={smoothScroll} href={`/${id}`}>
        <div className="relative block h-48 w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-primary-700 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
          <Image
            priority
            width={200}
            unoptimized={true}
            height={200}
            src={image}
            alt={title}
            className="pointer-events-none h-48 w-full transform object-cover group-hover:opacity-75"
          />
          <button type="button" className="absolute inset-0 focus:outline-none">
            <span className="sr-only">View details for {title}</span>
          </button>
        </div>
        <p className="mt-2 block truncate text-sm font-medium text-gray-900 group-hover:underline">
          {title}
        </p>
      </Link>

      <p className="block py-2 text-sm font-medium text-gray-700">{`${formatDate(
        date.start
      )} - ${formatDate(date.end)}`}</p>

      <p className="block text-sm font-medium text-gray-500">{extendedTitle}</p>

      <div className="mt-2 flex flex-wrap gap-2">
        {categories.map((i) => (
          <Badge key={i} title={i} />
        ))}
      </div>
    </li>
  );
}
