import { TourList } from "@/entities/tour/ui/tour-list";
import { Categories } from "@/features/Categories";
import { SortingMenu } from "@/features/Sorting";
import { Calendar } from "@/widgets/Calendar";

export async function HomePage() {
  return (
    <section className="flex">
      <Calendar />

      <div className="ms:py-0 w-full space-y-4">
        <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
          <Categories />

          <SortingMenu />
        </div>

        <TourList />
      </div>
    </section>
  );
};
