import { Button } from '@/components/ui/button';
import { useTask } from '@/contexts/task';

interface TaskItemStatusProps {
  taskId: string;
  isCompleted: boolean;
}

export function TaskItemStatus({ taskId, isCompleted }: TaskItemStatusProps) {
  const { toggleTaskStatus } = useTask();

  const handleClick = () => {
    toggleTaskStatus(taskId);
  };

  return (
    <Button
      onClick={handleClick}
      className={`order-0 rounded-full font-medium h-8 ${
        isCompleted
          ? 'bg-emerald-200 text-emerald-800'
          : 'bg-amber-200 text-amber-800'
      }`}
    >
      {isCompleted ? 'complete' : 'uncomplete'}
    </Button>
  );
}
