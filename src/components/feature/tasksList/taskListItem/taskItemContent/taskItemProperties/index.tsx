import { TaskItemStatus } from './taskItemStatus';
import { TaskItemActions } from './taskItemActions';
import { useTask } from '@/contexts/task';

interface TaskItemPropertiesProps {
  taskId: string;
}

export function TaskItemProperties({ taskId }: TaskItemPropertiesProps) {
  const { tasks } = useTask();
  const task = tasks.find(t => t.id === taskId);

  if (!task) return null;

  return (
    <div className="flex gap-4 border-dashed border-slate-200 dark:border-slate-700/[.3] border-t-2 w-full pt-4 mt-4 justify-between items-center">
      <TaskItemStatus taskId={taskId} isCompleted={task.isCompleted} />
      <TaskItemActions />
    </div>
  );
}
