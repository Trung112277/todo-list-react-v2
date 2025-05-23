import { TaskItemDelete } from './taskItemDelete';
import { TaskItemEdit } from './taskItemEdit';
import { TaskItemImportant } from './taskItemImportant';

export function TaskItemActions() {
  return (
    <div className="flex gap-2 items-center">
      <TaskItemImportant />
      <TaskItemEdit />
      <TaskItemDelete />
    </div>
  );
}
