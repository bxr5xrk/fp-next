import { formatDate } from "@/shared/lib";
import { Badge } from "@/shared/ui/Badge";
import Image from "next/image";
import Link from "next/link";

interface Tour {
  slug: string;
  image: string;
  title: {
    short: string;
    long: string;
  }
  dates: {
    start: string;
    end: string;
  }
  categories: string[];
}

interface TourItemProps extends Tour {

}

export function TourItem(props: TourItemProps): JSX.Element {
  const { slug, image, title, dates, categories } = props;

  return (
    <Link href={`/tours/${slug}`} className="group flex flex-col gap-1">
      <div className="relative block h-48 w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-primary-700 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
        <Image
          priority
          width={200}
          height={200}
          src={image}
          alt={title.short}
          className="pointer-events-none h-48 w-full transform object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
        />
        <button type="button" className="absolute inset-0 focus:outline-none">
          <span className="sr-only">View details for {title.short}</span>
        </button>
      </div>

      <p className="block py-1 text-sm font-medium text-gray-700">{`${formatDate(
        dates.start
      )} - ${formatDate(dates.end)}`}</p>

      <p className="mt-2 block truncate text-sm font-medium text-gray-900 group-hover:underline">
        {title.short}
      </p>

      <p className="text-sm font-medium text-gray-500 line-clamp-2">{title.long}</p>

      <div className="mt-2 flex flex-wrap gap-2">
        {categories.map((i) => (
          <Badge key={i} title={i} />
        ))}
      </div>
    </Link>
  );
};