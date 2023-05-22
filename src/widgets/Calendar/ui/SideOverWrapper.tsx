import { cl } from '@/shared/lib/cl';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import type { ReactNode } from 'react';

interface SideOverWrapperProps {
  children: ReactNode;
  show: boolean;
  onHide: VoidFunction;
  icon: ReactNode;
}

export default function SideOverWrapper({
  children,
  show,
  onHide,
  icon
}: SideOverWrapperProps) {
  return (
    <div className="block md:hidden">
      {icon}

      <div
        onClick={onHide}
        className={cl(
          'fixed inset-0 z-10 bg-black opacity-50 duration-200 ease-in-out lg:invisible',
          show ? 'visible' : 'invisible'
        )}
      ></div>

      <div
        className={cl(
          show ? 'visible opacity-100' : 'invisible opacity-0',
          'fixed inset-2 z-20 space-y-2 overflow-y-scroll rounded-lg bg-gray-50 p-2 duration-300 ease-in-out sm:p-4'
        )}
      >
        <button
          type="button"
          className="inline-block pl-4 pt-4"
          onClick={onHide}
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>

        <div className="z-10 rounded-md bg-gray-50 px-2">
          <h1 className="ml-3 text-lg font-semibold capitalize leading-6 text-primary-900">
            Календар
          </h1>
          {children}
        </div>
      </div>
    </div>
  );
}
