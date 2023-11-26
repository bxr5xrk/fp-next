"use client";

import { sortingValues } from '@/shared/config';
import { SelectMenu } from '@/shared/ui/SelectMenu';
import { ReadonlyURLSearchParams, usePathname, useRouter, useSearchParams } from 'next/navigation';

function getSortingValue(searchParams: ReadonlyURLSearchParams): string {
  const params = new URLSearchParams(searchParams);

  return params.get('sorting') ?? sortingValues[0].key;
}

function createQueryString(newSorting: string, searchParams: ReadonlyURLSearchParams) {
  const params = new URLSearchParams(searchParams);

  params.set('sorting', newSorting);

  return params.toString();
}

export function Sorting() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <SelectMenu
      id="sorting"
      label="Сортувати по:"
      options={sortingValues}
      defaultValue={getSortingValue(searchParams)}
      onChange={(value) => router.push(pathname + "?" + createQueryString(value, searchParams))}
    />
  );
}
