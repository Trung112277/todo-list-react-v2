import { useTaskItemContent } from '@/contexts/taskItemContent/context';

export function TaskDescription() {
  const { task } = useTaskItemContent();

  return (
    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
      {task.description || 'No description'}
    </p>
  );
}
