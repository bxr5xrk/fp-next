import { Tours } from "@/entities/tour";
import { Categories } from "@/features/Categories";
import { Sorting } from "@/features/Sorting";
import { Calendar } from "@/widgets/calendar";
import { Suspense } from "react";

export function HomePage() {
  return (
    <section className="flex">
      <Calendar />

      <div className="ms:py-0 w-full space-y-4">
        <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
          <Suspense>
            <Categories />
          </Suspense>
          <Suspense>
            <Sorting />
          </Suspense>
        </div>

        <Suspense>
          <Tours />
        </Suspense>
      </div>
    </section>
  );
};
