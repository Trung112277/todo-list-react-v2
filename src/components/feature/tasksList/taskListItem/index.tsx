import { BadgeTask } from './badgeTask';
import { TaskItemContent } from './taskItemContent';
export function TaskListItem() {
  return (
    <li>
      <BadgeTask />
      <TaskItemContent />
    </li>
  );
}
