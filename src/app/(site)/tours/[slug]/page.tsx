import sanity from '@/shared/lib/sanity';
import { TourPage } from '@/router/tour';

type Props = {
  params: { slug: string };
};

export default function Page({ params }: Props) {
  return (
    <TourPage slug={params.slug} />
  );
}

interface Tour {
  slug: string;
}

export async function generateStaticParams(): Promise<Tour[]> {
  const data = await sanity.fetch<Tour[]>(`*[_type == "tour"] {
      "slug": slug.current
    }`);

  return data.map((service) => ({
    slug: service.slug,
  }));
}
