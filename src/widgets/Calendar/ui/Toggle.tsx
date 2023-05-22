import { ChevronRightIcon } from '@heroicons/react/24/outline';

interface ToggleProps {
  onClick: VoidFunction;
}

export default function Toggle({ onClick }: ToggleProps) {
  return (
    <button
      type="button"
      className="fixed -left-10 top-20 z-20 inline-flex h-16 w-16 rounded-full bg-primary-400 p-3 pl-4 pt-4"
      onClick={onClick}
    >
      <ChevronRightIcon className="absolute right-0 top-5 mt-0.5 h-5 w-5 text-white" />
    </button>
  );
}
