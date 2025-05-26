import { useTaskItemContent } from '@/contexts/taskItemContent/context';
import { useTask } from '@/contexts/task';
import { useTaskItemId } from '@/contexts/taskItem/context';
import { cn } from '@/lib/utils';

export function TaskDescription() {
  const { task } = useTaskItemContent();
  const taskId = useTaskItemId();
  const { tasks } = useTask();
  const isFirstTask = tasks[0]?.id === taskId;

  return (
    <p className={cn(
      "text-sm line-clamp-2",
      isFirstTask 
        ? "text-white/90" 
        : "text-slate-600 dark:text-slate-400"
    )}>
      {task.description || 'No description'}
    </p>
  );
}
