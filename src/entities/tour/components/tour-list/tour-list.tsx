import sanity from "@/shared/lib/sanity";
import { TourItem } from "./components/tour-item";
import { Tour } from "./types";
import { sortingValues } from "@/shared/config";

interface TourListProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

function getArrayOfStrings(value: string | string[] | undefined): string[] {
  if (typeof value === 'string') {
    return [value];
  }

  if (Array.isArray(value)) {
    return value;
  }

  return [];
}

interface SortingValue {
  type: string;
  order: string;
}

function parseSortingValue(value: string): SortingValue {
  const values = value.toLowerCase().split('_');

  const type = values[0] === "dates" ? "dates.start" : "price.USD";
  const order = values[1];

  return {
    type,
    order,
  };
}

function getSortingValue(value: string | string[] | undefined): SortingValue {
  if (typeof value === 'string') {
    return parseSortingValue(value);
  }

  const defaultSorting = sortingValues[0];

  return parseSortingValue(defaultSorting.key);
}

export async function TourList({ searchParams }: TourListProps) {
  const categories = getArrayOfStrings(searchParams.category);
  const sorting = getSortingValue(searchParams.sorting);

  const tours = await getData(categories, sorting);

  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:gap-x-6 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
      {tours.map((tour) => (
        <TourItem key={tour.slug} {...tour} />
      ))}
    </div>
  );
}

async function getData(categories: string[], sorting: SortingValue | null): Promise<Tour[]> {
  const applyFilter = categories.length > 0;

  const filterQuery = applyFilter ? `&& references(*[_type == "category" && slug.current in $categories]._id)` : '';

  const data = await sanity.fetch<Tour[]>(`*[_type == "tour" ${filterQuery}] | order(${sorting?.type} ${sorting?.order}) {
    "slug": slug.current,
    title,
      dates,
      "image": images.main.asset->{url}.url,
      "categories": categories[]->,
  }`, applyFilter ? { categories } : undefined);

  return data;
}
