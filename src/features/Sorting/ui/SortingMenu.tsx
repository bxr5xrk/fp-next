'use client';

import { getFilters, useFilters } from '@/entities/filters';
import { SelectMenu } from '@/shared/ui/SelectMenu';
import { options } from '../lib/sortingValues';

export default function SortingMenu() {
  const { setOrder } = useFilters(getFilters);

  return (
    <SelectMenu
      id="sorting"
      label="Сортувати по:"
      options={options}
      onChange={setOrder}
    />
  );
}
