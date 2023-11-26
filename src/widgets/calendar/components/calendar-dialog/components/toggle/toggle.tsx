import { cl } from '@/shared/lib';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

interface ToggleProps {
  onClick: VoidFunction;
  show: boolean;
}

export function Toggle({ onClick, show }: ToggleProps) {
  return (
    <button
      type="button"
      className={cl("fixed -left-10 duration-100 top-20 z-20 inline-flex h-16 w-16 rounded-full bg-primary-400 p-3 pl-4 pt-4 transition-all ease-in-out",
        !show ? "opacity-100" : "opacity-0 pointer-events-none")}
      onClick={onClick}
    >
      <ChevronRightIcon className="absolute right-0 top-5 mt-0.5 h-5 w-5 text-white" />
    </button>
  );
}
