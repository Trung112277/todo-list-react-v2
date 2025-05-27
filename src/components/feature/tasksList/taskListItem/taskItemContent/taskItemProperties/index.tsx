import { memo } from 'react';
import { TaskItemStatus } from './taskItemStatus';
import { TaskItemActions } from './taskItemActions';
import { useTaskItemContent } from '@/contexts/taskItemContent/context';

function TaskItemPropertiesComponent() {
  const { task } = useTaskItemContent();

  return (
    <div className="flex gap-4 border-dashed border-slate-200 dark:border-slate-700/[.3] border-t-2 w-full pt-4 mt-4 justify-between items-center">
      <TaskItemStatus isCompleted={task.isCompleted} />
      <TaskItemActions />
    </div>
  );
}
export const TaskItemProperties = memo(TaskItemPropertiesComponent);

