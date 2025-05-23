import { TaskItemDelete } from './taskItemDelete';
import { TaskItemEdit } from './taskItemEdit';
import { TaskItemImportant } from './taskItemImportant';

interface TaskItemActionsProps {
  taskId: string;
}

export function TaskItemActions({ taskId }: TaskItemActionsProps) {
  return (
    <div className="flex gap-2 items-center">
      <TaskItemImportant taskId={taskId} />
      <TaskItemEdit />
      <TaskItemDelete />
    </div>
  );
}
