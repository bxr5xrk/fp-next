import sanity from "@/shared/lib/sanity";
import { TourItem } from "./components/tour-item";
import { Tour } from "./types";

export async function TourList() {
  const tours = await getData();

  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:gap-x-6 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
      {tours.map((tour) => (
        <TourItem key={tour.slug} {...tour} />
      ))}
    </div>
  );
}

async function getData(): Promise<Tour[]> {
  const data = await sanity.fetch<Tour[]>(`*[_type == "tour"] {
    "slug": slug.current,
    title,
      dates,
      "image": images.main.asset->{url}.url,
      "categories": categories[]->{name}.name,
  }`);

  return data;
}