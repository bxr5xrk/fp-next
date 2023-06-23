import { useTourById } from '@/entities/tour';
import Stats from '@/shared/Stats';
import { GoToHomeLink } from '@/shared/ui/GoToHomeLink/GoToHomeLink';
import { Metadata, ResolvingMetadata } from 'next';
import db from '../../../db.json';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const tour = db.tours.find((i) => i.id === Number(id)) ?? db.tours[0];

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent)?.openGraph?.images || [];

  return {
    title: tour.extended_title,
    openGraph: {
      images: [...previousImages],
    },
  };
}

export default function TourPage() {
  return (
    <>
      <GoToHomeLink />

      <Stats />
    </>
  );
}
