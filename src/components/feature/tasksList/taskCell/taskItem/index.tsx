import { TaskListItem } from '@/components/feature/tasksList/taskListItem';
import { TaskItemSkeleton } from '@/components/feature/tasksList/taskListItem/taskItemSkeleton';
import { useLoading } from '@/contexts/loading/context';

interface TaskItemProps {
  taskId: string;
}

export function TaskItem({ taskId }: TaskItemProps) {
  const { isLoading } = useLoading();

  return (
    <div 
      className="transition-all duration-300 ease-in-out transform hover:scale-[1.02]"
    >
      {isLoading ? (
        <TaskItemSkeleton />
      ) : (
        <TaskListItem taskId={taskId} />
      )}
    </div>
  );
} 