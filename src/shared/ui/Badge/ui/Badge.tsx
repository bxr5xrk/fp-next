import { cl } from '@/shared/lib/cl';

interface BadgeProps {
  title: string;
  onClick?: () => void;
  isActive?: boolean;
}

export default function Badge({ title, onClick, isActive }: BadgeProps) {
  return (
    <button
      onClick={onClick}
      className={cl(
        isActive
          ? 'bg-primary-800 text-primary-100 hover:bg-primary-900 hover:text-primary-200'
          : 'bg-primary-100 text-primary-800 hover:bg-primary-200 hover:text-primary-900',
        onClick ? 'cursor-pointer' : 'cursor-text', // if clickable add pointer
        'inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium transition'
      )}
    >
      {title}
    </button>
  );
}
