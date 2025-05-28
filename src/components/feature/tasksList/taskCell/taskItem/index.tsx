import { TaskListItem } from '@/components/feature/tasksList/taskListItem';
import { TaskItemSkeleton } from '@/components/feature/tasksList/taskListItem/taskItemSkeleton';
import { useLoading } from '@/contexts/loading/context';
import { useTaskItemId } from '@/contexts/taskItem/context';
import { useViewTasks } from '@/contexts/viewTasks/context';
import { cn } from '@/lib/utils';

export function TaskItem() {
  const { isLoading } = useLoading();
  const taskId = useTaskItemId();
  const { view } = useViewTasks();

  const content = isLoading ? (
    <TaskItemSkeleton />
  ) : (
    <TaskListItem taskId={taskId} />
  );

  if (view === 'list') {
    return (
      <div className="w-full">
        {content}
      </div>
    );
  }

  return content;
} 