import type { ReactNode } from 'react';

export default function SideWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="mr-10 hidden h-fit min-h-[300px] min-w-[300px] max-w-[300px] rounded-md bg-gray-100 px-2 md:block">
      {children}
    </div>
  );
}
