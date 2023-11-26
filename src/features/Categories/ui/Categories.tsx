'use client';

import { categories } from '../config/categoriesConfig';
import { Badge } from '@/shared/ui/Badge';
// import { manageCategories } from '../lib/manageCategories';

export default function Categories() {
  // const handleClickCategory = (category: string) => {
  //   const updatedCategories = manageCategories(activeCategories, category);

  //   setCategories(updatedCategories);
  // };

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Badge
          isActive={false}
          onClick={() => (category)}
          title={category}
          key={category}
        />
      ))}
    </div>
  );
}
