import { useTask } from '@/contexts/task';
import { FaCalendarDays } from 'react-icons/fa6';

interface TaskDueDayProps {
  taskId: string;
}

export function TaskDueDay({ taskId }: TaskDueDayProps) {
  const { tasks } = useTask();
  const task = tasks.find(t => t.id === taskId);

  if (!task) return null;

  return (
    <time
      className="mt-auto flex w-full items-center gap-2 text-md text-slate-500 dark:text-slate-400"
      dateTime={task.updatedAt.toISOString().split('T')[0]}
    >
      <FaCalendarDays />
      {task.updatedAt.toLocaleDateString()}
    </time>
  );
}
