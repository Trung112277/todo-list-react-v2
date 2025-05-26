import { BadgeTask } from './badgeTask';
import { TaskItemContent } from './taskItemContent';

interface TaskListItemProps {
  taskId: string;
}

export function TaskListItem({ taskId }: TaskListItemProps) {
  return (
    <div>
      <BadgeTask taskId={taskId} />
      <TaskItemContent />
    </div> 
  );
}
