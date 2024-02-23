import { formatDate } from "@/shared/lib";
import { Badge } from "@/shared/components/badge";
import Image from "next/image";
import Link from "next/link";
import { Tour } from "@/entities/tour/types";

interface TourItemProps extends Tour {

}

export function TourItem(props: TourItemProps): JSX.Element {
  const { slug, image, title, dates, categories } = props;

  return (
    <Link href={`/${slug}`} className="group flex flex-col gap-1">
      <div className="relative block h-48 w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-primary-700 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
        <Image
          priority
          width={500}
          height={500}
          src={image}
          alt={title.short}
          className="pointer-events-none h-48 w-full transform object-cover group-hover:scale-105 transition-all duration-300 ease-in-out object-center"
        />
        <button type="button" className="absolute inset-0 focus:outline-none">
          <span className="sr-only">View details for {title.short}</span>
        </button>
      </div>

      <p className="block pt-2 text-sm font-medium text-gray-700">{`${formatDate(
        dates.start
      )} - ${formatDate(dates.end)}`}</p>

      <p className="pt-2 block truncate text-sm font-medium text-gray-900 line-clamp-2">
        {title.short}
      </p>

      <p className="my-2 text-sm font-medium text-gray-500 line-clamp-2">{title.long}</p>

      <div className="flex flex-wrap h-auto max-h-16 gap-2 overflow-hidden">
        {categories?.map((i) => (
          <Badge key={i.slug} title={i.name} />
        ))}
      </div>
    </Link>
  );
};