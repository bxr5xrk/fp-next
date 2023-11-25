import { formatDate } from '@/shared/lib';
import { diffDates } from '@/shared/lib/diffDates';
import { formatPrice } from '@/shared/lib/formatPrice';
import sanity from '@/shared/lib/sanity';
import { GoToHomeLink } from '@/shared/ui/GoToHomeLink/GoToHomeLink';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { PortableTextBlock } from 'sanity';

type Props = {
  params: { slug: string };
};

// export async function generateMetadata(
//   { params, searchParams }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   // read route params
//   const id = params.id;

//   // fetch data
//   const tour = db.tours.find((i) => i.id === Number(id)) ?? db.tours[0];

//   // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent)?.openGraph?.images || [];

//   return {
//     title: tour.extended_title,
//     openGraph: {
//       images: [...previousImages],
//     },
//   };
// }

interface TourSlug {
  slug: string;
}

export async function generateStaticParams(): Promise<TourSlug[]> {
  const data = await sanity.fetch<TourSlug[]>(`*[_type == "tour"] {
      "slug": slug.current
    }`);

  return data.map((service) => ({
    slug: service.slug,
  }));
}


export default function Page({ params }: Props) {
  return (<TourPage slug={params.slug} />);
}

interface TourPageProps {
  slug: string;
}

export function TourPage({ slug }: TourPageProps): JSX.Element {
  return (
    <>
      <GoToHomeLink />

      <TourInfo slug={slug} />
    </>
  )
}

interface TourInfoProps {
  slug: string;
}

const getStats = (tour: Tour) => [
  {
    name: 'Ціна',
    value:
      formatPrice(tour.price.USD, 'USD') +
      ' + ' +
      formatPrice(tour.price.UAH, 'UAH'),
  },
  {
    name: 'Тривалість',
    value: diffDates(tour.dates.start, tour.dates.end) + ' днів',
  },
  {
    name: 'Дата',
    value: formatDate(tour.dates.start) + ' - ' + formatDate(tour.dates.end),
  },
];


export async function TourInfo({ slug }: TourInfoProps): Promise<JSX.Element> {
  const tour = await getData(slug);
  const { title, attractions, images, content } = tour;

  const stats = getStats(tour);

  return (
    <>
      {/* header */}
      <div className="text-center">
        <h2 className="font-medium text-gray-500">{title.short}</h2>
        <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title.long}
        </p>
        <div className='flex gap-1 items-start mt-4 mx-auto w-fit'>
          {attractions.map((attraction, index) => (
            <p key={index} className="text-gray-500 capitalize">{attraction}{index === attractions.length - 1 ? "." : ","}</p>
          ))}
        </div>
      </div>

      {/* stats */}
      <dl className="mx-auto mt-5 flex flex-col justify-center gap-8 border-b border-t border-gray-200 px-6 py-7 text-center md:flex-row md:py-14 lg:px-8">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="mx-auto flex flex-row items-center gap-3 md:flex-col"
          >
            <dt className="text-base leading-7 text-gray-600">{stat.name}:</dt>
            <dd className="text-md font-semibold tracking-tight text-gray-900 sm:text-2xl">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>

      {/* images */}
      <div className="my-8 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
        {tour.images.map((image, index) => (
          <div
            key={index + 1}
            className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg"
          >
            <Image
              priority
              src={image}
              alt={String(index + 1) + ' image'}
              width={100}
              height={100}
              className="h-full w-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* description */}
      <PortableText value={content} components={{
        block: (data) => {
        return <p className="text-gray-500 py-1">{data.children}</p>}
      }} />
    </>
  );
}

interface Tour {
  images: string[];
  title: {
    short: string;
    long: string;
  };
  attractions: string[];
  content: PortableTextBlock;
  price: {
    UAH: number;
    USD: number;
  }
  dates: {
    start: string;
    end: string;
  }
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