import { memo } from 'react';
import { useTaskItemContent } from '@/contexts/taskItemContent/context';
import { useTask } from '@/contexts/task';
import { useTaskItemId } from '@/contexts/taskItem/context';
import { cn } from '@/lib/utils';

function TaskNameComponent() {
  const { task } = useTaskItemContent();
  const taskId = useTaskItemId();
  const { tasks } = useTask();
  const isFirstTask = tasks[0]?.id === taskId;

  return (
    <h3 className={cn(
      "text-lg font-medium",
      isFirstTask 
        ? "text-white" 
        : "text-slate-700 dark:text-slate-200"
    )}>
      {task.title}
    </h3>
  );
}

export const TaskName = memo(TaskNameComponent);
