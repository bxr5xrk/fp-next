import TourList from '@/entities/tour/ui/TourList';
import { Calendar } from '@/widgets/Calendar';

export const metadata = {
  title: 'Франківський Паломник',
  description: '#Мизнаємошлях',
};

export default async function HomePage() {
  return (
    <>
      <Calendar />

      <div className="ms:py-0 w-full space-y-4 py-5">
        <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
          {/* <Categories /> */}
          <div>Categories</div>

          {/* <SortingMenu /> */}
          <div>SortingMenu</div>
        </div>

        {/* <TourList /> */}
        {/* @ts-expect-error Server Component */}
        <TourList />
      </div>
    </>
  );
}
