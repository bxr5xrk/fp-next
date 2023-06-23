import TourList from '@/entities/tour/ui/TourList';
import { Calendar } from '@/widgets/Calendar';
import { Categories } from './features/Categories';
import { SortingMenu } from './features/Sorting';

export default async function HomePage() {
  return (
    <section className="flex">
      <Calendar />

      <div className="ms:py-0 w-full space-y-4">
        <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
          <Categories />

          <SortingMenu />
        </div>

        {/* @ts-expect-error Server Component */}
        <TourList />
      </div>
    </section>
  );
}
