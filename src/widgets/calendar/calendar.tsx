import sanity from '@/shared/lib/sanity';
import { List } from './components/list';
import { Tour } from './types';

export async function Calendar(): Promise<JSX.Element> {
  const tours = await getData();

  // const router = useRouter();

  // const [showSideOver, setShowSideOver] = useState(false);

  // const handleClickTour = (id: number) => {
  //   if (showSideOver) {
  //     setShowSideOver(false);
  //   }

  //   setScrollPermission(true);
  //   router.push(`/tours/${id}`);
  // };

  return (
    <>
      <div className="mr-10 hidden h-fit min-w-[300px] max-w-[300px] rounded-md bg-gray-100 px-2 md:block">
        <List tours={tours} />
      </div>

      {/* <SideOverWrapper
        show={showSideOver}
        icon={
          !showSideOver ? (
            <Toggle
              onClick={() => {
                setScrollPermission(false);
                setShowSideOver(true);
              }}
            />
          ) : null
        }
        onHide={() => {
          setScrollPermission(true);
          setShowSideOver(false);
        }}
      >
        <List handleClick={handleClickTour} />
      </SideOverWrapper> */}
    </>
  );
}

async function getData(): Promise<Tour[]> {
  const data = await sanity.fetch<Tour[]>(`*[_type == "tour"] {
    "title": title.short,
    "startDate": dates.start,
    "slug": slug.current
  }`);

  return data;
}
