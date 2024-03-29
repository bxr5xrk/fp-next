import sanity from "@/shared/lib/sanity";
import { Tour } from "./types";
import { Stats } from "./components/stats";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/shared/lib/sanity/portable-components";
import { ScrollToUp } from "@/shared/ui/scroll-to-up";

interface TourInfoProps {
  slug: string;
}

export async function TourInfo({ slug }: TourInfoProps) {
  const tour = await getData(slug);
  const { title, attractions, images, content } = tour;

  return (
    <>
      {/* header */}
      <div className="text-center">
        <h2 className="font-medium text-gray-500">{title.short}</h2>
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title.long}
        </h1>
        {attractions?.length ? <p className="text-gray-500 capitalize mx-auto w-fit mt-4">{attractions.map((attraction, index) => `${attraction}${index === attractions.length - 1 ? "." : ","} `)}</p> : null}
      </div>

      <Stats tour={tour} />

      {/* images */}
      <div className="my-8 grid grid-cols-1 gap-y-6 md:gap-y-16 lg:grid-cols-2 lg:gap-x-8">
        {images?.map((image, index) => (
          <div
            key={index}
            className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg relative"
          >
            <Image
              priority
              src={image}
              alt={title.short}
              width={500}
              height={500}
              quality={100}
              className="h-full w-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* description */}
      <PortableText value={content}
        components={portableTextComponents}
      />
      <ScrollToUp />
    </>
  );
}

async function getData(slug: string): Promise<Tour> {
  const data = await sanity.fetch<Tour>(`*[_type == "tour" && slug.current == "${slug}"][0] {
    title,
    dates,
    "attractions": attractions[]->{name}.name,
    content,
      price,
    "images": images.additional[].asset->{url}.url
  }`);

  return data;
}