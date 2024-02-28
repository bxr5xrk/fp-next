import sanity from '@/shared/lib/sanity';
import { List } from './components/list';
import { Tour } from './types';
import { CalendarDialog } from './components/calendar-dialog';

export async function Calendar(): Promise<JSX.Element> {
  const tours = await getData();

  return (
    <>
      <div className="mr-10 hidden h-fit min-w-[300px] max-w-[300px] rounded-md bg-gray-100 px-2 md:block">
        <List tours={tours} />
      </div>

      <CalendarDialog>
        <List tours={tours} />
      </CalendarDialog>
    </>
  );
}

async function getData(): Promise<Tour[]> {
  const data = await sanity.fetch<Tour[]>(`*[_type == "tour"] {
    "title": title.short,
    "startDate": dates.start,
    "endDate": dates.end,
    "slug": slug.current
  }`);

  return data;
}
