import { GoToHome } from "@/shared/components/go-to-home";
import { TourInfo } from "./components/tour-info";

interface TourPageProps {
  slug: string;
}

export function TourPage({ slug }: TourPageProps): JSX.Element {
  return (
    <>
      <GoToHome />

      <TourInfo slug={slug} />
    </>
  );
}
