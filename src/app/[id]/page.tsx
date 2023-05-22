import Stats from '@/shared/Stats';
import { GoToHomeLink } from '@/shared/ui/GoToHomeLink/GoToHomeLink';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function TourPage() {
  return (
    <>
      <GoToHomeLink />

      {/* @ts-expect-error Server Component */}
      <Stats />
    </>
  );
}
