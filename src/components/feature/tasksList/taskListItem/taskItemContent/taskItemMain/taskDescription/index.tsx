import { useTask } from '@/contexts/task';

interface TaskDescriptionProps {
  taskId: string;
}

export function TaskDescription({ taskId }: TaskDescriptionProps) {
  const { tasks } = useTask();
  const task = tasks.find(t => t.id === taskId);

  if (!task) return null;

  return (
    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
      {task.description || 'No description'}
    </p>
  );
}
