import { TaskItemStatus } from './taskItemStatus';
import { TaskItemActions } from './taskItemActions';

export function TaskItemProperties() {
  return (
    <div className="flex gap-4 border-dashed border-slate-200 dark:border-slate-700/[.3] border-t-2 w-full pt-4 mt-4 justify-between items-center">
      <TaskItemStatus />
      <TaskItemActions />
    </div>
  );
}
