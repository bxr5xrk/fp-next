import { TourList } from "@/entities/tour";
import { Categories } from "@/features/Categories";
import { Sorting } from "@/features/Sorting";
import { Calendar } from "@/widgets/calendar";

interface HomePageProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export function HomePage({ searchParams }: HomePageProps) {
  return (
    <section className="flex">
      <Calendar />

      <div className="ms:py-0 w-full space-y-4">
        <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
          <Categories />

          <Sorting />
        </div>

        <TourList searchParams={searchParams} />
      </div>
    </section>
  );
};
