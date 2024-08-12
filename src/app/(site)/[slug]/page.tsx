import sanity from '@/shared/lib/sanity';
import { TourPage } from '@/router/tour';
import { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  const data = await getSEOData(decodeURIComponent(slug));

  return {
    metadataBase: new URL("https://fp.if.ua"),
    title: data.title.short,
    description: data.title.long,
    keywords: "паломництво, паломник, паломництва, паломництво зі Львова, паломництво з Івано-Франківська, паломництво з України, паломництво зі Львова, паломництво з Івано-Франківська, паломництво з України, паломництво зі Львова, паломництво з Івано-Франківська, паломництво з України, паломництво зі Львова, паломництво з Івано-Франківська, паломництво з України, паломництво зі Львова, паломництво з Івано-Франківська, паломництво з України, паломництво зі Львова, паломництво з Івано-Франківська, паломництво з України, паломництво зі Львова, паломництво з Івано-Франківська, паломництво з України",
    openGraph: {
      title: data.title.short,
      description: data.title.long,
      images: [
        {
          url: "/logo.png",
          width: 40,
          height: 40,
          alt: "Франківський Паломник",
        },
      ],
    }
  };
}

export default function Page({ params }: Props) {

  return (
    <TourPage slug={decodeURIComponent(params.slug)} />
  );
}

interface Tour {
  slug: string;
}

interface SEOData {
  title: {
    short: string;
    long: string;
  }
}

async function getSEOData(slug: string): Promise<SEOData> {
  const data = await sanity.fetch<SEOData>(`*[_type == "tour" && slug.current == $slug][0] {
      title,
    }`, { slug });

  return data;
}

export async function generateStaticParams(): Promise<Tour[]> {
  const data = await sanity.fetch<Tour[]>(`*[_type == "tour"] {
      "slug": slug.current
    }`);

  return data.map((service) => ({
    slug: service.slug,
  }));
}
