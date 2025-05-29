import { Button } from '@/components/ui/button';
import { useTask } from '@/contexts/task';
import { useTaskItemId } from '@/contexts/taskItem/context';
import { IoCheckmark, IoClose } from 'react-icons/io5';
import { cn } from '@/lib/utils';

interface TaskItemStatusProps {
  isCompleted: boolean;
}

export function TaskItemStatus({ isCompleted }: TaskItemStatusProps) {
  const { toggleTaskStatus } = useTask();
  const taskId = useTaskItemId();

  const handleClick = () => {
    toggleTaskStatus(taskId);
  };

  return (
    <Button
      onClick={handleClick}
      className={cn(
        "order-0 rounded-full font-medium h-8 sm:w-full w-8",
        isCompleted
          ? "bg-emerald-200 text-emerald-800"
          : "bg-amber-200 text-amber-800"
      )}
    >
      <span className="hidden sm:inline">
        {isCompleted ? 'complete' : 'uncomplete'}
      </span>
      <span className="sm:hidden">
        {isCompleted ? (
          <IoCheckmark className="w-4 h-4" />
        ) : (
          <IoClose className="w-4 h-4" />
        )}
      </span>
    </Button>
  );
}
