'use client';

import { smoothScroll } from '@/shared/lib/smoothScroll';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function GoToHomeLink() {
  return (
    <Link onClick={smoothScroll} href="/" className="inline-block">
      <ArrowLeftIcon
        className="h-5 w-5 text-gray-600 hover:text-gray-800"
        aria-hidden
      />
    </Link>
  );
}
