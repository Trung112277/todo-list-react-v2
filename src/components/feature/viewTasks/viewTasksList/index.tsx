import { Button } from '@/components/ui/button';
import { FaListUl } from 'react-icons/fa';
import { cn } from '@/lib/utils';

interface ViewTasksListProps {
  isActive: boolean;
  onClick: () => void;
}

export function ViewTasksList({ isActive, onClick }: ViewTasksListProps) {
  return (
    <Button
      variant="ghost"
      onClick={onClick}
      className={cn(
        "p-0 h-8 w-8",
        isActive 
          ? "bg-primary text-white hover:bg-primary/90" 
          : "hover:bg-slate-100 dark:hover:bg-slate-800 text-gray-400"
      )}
    >
      <FaListUl style={{width: "20px", height: "20px"}} />
    </Button>
  );
}
