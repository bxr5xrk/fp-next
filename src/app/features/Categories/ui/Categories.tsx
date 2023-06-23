'use client';

import { categories } from '../config/categoriesConfig';
import { Badge } from '@/shared/ui/Badge';
import { manageCategories } from '../lib/manageCategories';
import { getFilters, useFilters } from '@/app/entities/filters';

export default function Categories() {
  const { categories: activeCategories, setCategories } =
    useFilters(getFilters);

  const handleClickCategory = (category: string) => {
    const updatedCategories = manageCategories(activeCategories, category);

    setCategories(updatedCategories);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Badge
          isActive={activeCategories.includes(category)}
          onClick={() => handleClickCategory(category)}
          title={category}
          key={category}
        />
      ))}
    </div>
  );
}
