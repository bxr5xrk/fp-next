import Stats from '@/shared/Stats';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function TourPage() {
  return (
    <>
      {/* go back link */}
      <Link href="/" className="inline-block">
        <ArrowLeftIcon
          className="h-5 w-5 text-gray-600 hover:text-gray-800"
          aria-hidden
        />
      </Link>

      {/* @ts-expect-error Server Component */}
      <Stats />
    </>
  );
}
