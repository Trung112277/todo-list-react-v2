import { memo } from 'react';
import { useTaskById } from '@/hooks/useTaskById';

interface TaskNameProps {
  taskId: string;
}

function TaskNameComponent({ taskId }: TaskNameProps) {
  const task = useTaskById(taskId);

  if (!task) return null;

  return (
    <h3 className="text-lg font-medium text-slate-700 dark:text-slate-200">
      {task.title}
    </h3>
  );
}

export const TaskName = memo(TaskNameComponent);
