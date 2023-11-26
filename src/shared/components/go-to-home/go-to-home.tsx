"use client";

import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

export function GoToHome() {
  const router = useRouter();

  return (
    <span onClick={() => router.back()} className="inline-block cursor-pointer">
      <ArrowLeftIcon
        className="h-5 w-5 text-gray-600 hover:text-gray-800"
        aria-hidden
      />
    </span>
  );
}
