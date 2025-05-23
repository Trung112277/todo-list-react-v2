import { Button } from '@/components/ui/button';
import { useTask } from '@/contexts/task';
import { useTaskItemId } from '@/contexts/taskItem/context';

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
