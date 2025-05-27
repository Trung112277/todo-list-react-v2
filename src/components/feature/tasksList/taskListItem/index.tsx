import { BadgeTask } from './badgeTask';
import { TaskItemContent } from './taskItemContent';
import { TaskItemIdProvider } from '@/contexts/taskItem/context';

interface TaskListItemProps {
  taskId: string;
}

export function TaskListItem({ taskId }: TaskListItemProps) {
  return (
    <TaskItemIdProvider taskId={taskId}>
      <div>
        <BadgeTask taskId={taskId} />
        <TaskItemContent />
      </div>
    </TaskItemIdProvider>
  );
}
