'use client';

import { Badge } from "@/shared/components/badge";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ReadonlyURLSearchParams, usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

interface Category {
  name: string;
  slug: string;
}

function getCategoryParams(searchParams: ReadonlyURLSearchParams): string[] {
  const params = new URLSearchParams(searchParams);

  const existingCategories = params.getAll('category');

  return existingCategories;
}

function createQueryString(newCategory: string, searchParams: ReadonlyURLSearchParams) {
  const params = new URLSearchParams(searchParams);

  const existingCategories = getCategoryParams(searchParams);

  if (existingCategories.includes(newCategory)) {
    params.delete('category', newCategory);
    return params.toString();
  }

  params.append('category', newCategory);

  return params.toString();
}

function resetAll(searchParams: ReadonlyURLSearchParams) {
  const params = new URLSearchParams(searchParams);

  params.delete('category');

  return params.toString();
}

export function CategoryList({ categories }: { categories: Category[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Badge
          isActive={searchParams.has("category", category.slug)}
          title={category.name}
          key={category.slug}
          onClick={() => router.push(pathname + '?' + createQueryString(category.slug, searchParams))}
        />
      ))}
      {getCategoryParams(searchParams).length ?
       <span onClick={() => router.push(pathname + '?' + resetAll(searchParams))} className="bg-primary-100 text-primary-800 cursor-pointer hover:bg-primary-200 hover:text-primary-900 inline-flex justify-center items-center rounded-full w-7 h-7 text-sm font-medium transition">
        <XMarkIcon className="w-4 h-4" />
      </span> : null}
    </div>
  );
}
