import { Tour } from "../../types";
import { getStats } from "./lib/get-stats";

interface StatsProps {
  tour: Tour;
}

export function Stats({ tour }: StatsProps): JSX.Element {
  const stats = getStats(tour);

  return (
    <dl className="mx-auto mt-5 flex flex-col justify-center gap-8 border-b border-t border-gray-200 px-6 py-7 text-center md:flex-row md:py-14 lg:px-8">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="mx-auto flex flex-row items-center gap-3 md:flex-col"
        >
          <dt className="text-base leading-7 text-gray-600">{stat.name}:</dt>
          <dd className="text-md font-semibold tracking-tight text-gray-900 sm:text-2xl">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
};