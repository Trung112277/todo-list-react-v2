import { Button } from '@/components/ui/button';
import { CiGrid41 } from 'react-icons/ci';
import { cn } from '@/lib/utils';

interface ViewTasksGridProps {
  isActive: boolean;
  onClick: () => void;
}

export function ViewTasksGrid({ isActive, onClick }: ViewTasksGridProps) {
  return (
    <Button
      variant="ghost"
      onClick={onClick}
      className={cn(
        "p-0 h-9 w-9",
        isActive 
          ? "bg-primary text-white hover:bg-primary/90" 
          : "hover:bg-slate-100 dark:hover:bg-slate-800 text-gray-400"
      )}
    >
      <CiGrid41 style={{width: "20px", height: "20px"}} />
    </Button>
  );
}
