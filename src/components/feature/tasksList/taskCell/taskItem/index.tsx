import { TaskListItem } from '@/components/feature/tasksList/taskListItem';
import { TaskItemSkeleton } from '@/components/feature/tasksList/taskListItem/taskItemSkeleton';
import { useLoading } from '@/contexts/loading/context';

interface TaskItemProps {
  taskId: string;
  style: React.CSSProperties;
}

export function TaskItem({ taskId, style }: TaskItemProps) {
  const { isLoading } = useLoading();

  return (
    <div 
      style={style} 
      className="p-2 sm:p-4 xl:p-6 transition-all duration-300 ease-in-out transform hover:scale-[1.02]"
    >
      {isLoading ? (
        <TaskItemSkeleton />
      ) : (
        <TaskListItem taskId={taskId} />
      )}
    </div>
  );
} 