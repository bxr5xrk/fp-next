import List from './List';
import SideWrapper from './SideWrapper';
import sanity from '@/shared/lib/sanity';

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
      <SideWrapper>
        <List tours={tours} />
      </SideWrapper>

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

export interface Tour {
  slug: string;
  startDate: string;
  title: string
}

async function getData(): Promise<Tour[]> {
  const data = await sanity.fetch<Tour[]>(`*[_type == "tour"] {
    "title": title.short,
    "startDate": dates.start,
    "slug": slug.current
  }`);

  return data;
}
