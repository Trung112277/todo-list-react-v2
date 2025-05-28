import { BadgeTask } from './badgeTask';
import { TaskItemContent } from './taskItemContent';
import { TaskItemIdProvider } from '@/contexts/taskItem/context';
import { useViewTasks } from '@/contexts/viewTasks/context';
import { cn } from '@/lib/utils';

interface TaskListItemProps {
  taskId: string;
}

export function TaskListItem({ taskId }: TaskListItemProps) {
  const { view } = useViewTasks();

  return (
    <TaskItemIdProvider taskId={taskId}>
      <li className={cn(
        'transition-all duration-300 ease-in-out transform hover:scale-[1.02]',
        view === 'list' && 'w-full'
      )}>
        <BadgeTask taskId={taskId} />
        <TaskItemContent />
      </li>
    </TaskItemIdProvider>
  );
}
