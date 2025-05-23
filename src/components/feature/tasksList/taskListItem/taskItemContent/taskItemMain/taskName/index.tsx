import { memo } from 'react';
import { useTaskItemContent } from '@/contexts/taskItemContent/context';

function TaskNameComponent() {
  const { task } = useTaskItemContent();

  return (
    <h3 className="text-lg font-medium text-slate-700 dark:text-slate-200">
      {task.title}
    </h3>
  );
}

export const TaskName = memo(TaskNameComponent);
