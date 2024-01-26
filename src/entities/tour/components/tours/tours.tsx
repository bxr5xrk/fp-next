import sanity from "@/shared/lib/sanity";
import { Tour } from "../../types";
import { TourList } from "../tour-list";

export async function Tours() {
  const tours = await getData();

  return (
    <TourList tours={tours} />
  );
}

async function getData(): Promise<Tour[]> {
  const data = await sanity.fetch<Tour[]>(`*[_type == "tour"] {
    "slug": slug.current,
    title,
      dates,
      price,
      "image": images.main.asset->{url}.url,
      "categories": categories[]->{
        name,
        "slug": slug.current,
      },
  }`);

  return data;
}



