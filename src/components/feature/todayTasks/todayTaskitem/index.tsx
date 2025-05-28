import { Task } from '@/types/task';
import { cn } from '@/lib/utils';

interface TodayTaskItemProps {
  task: Task;
  className?: string;
}

export function TodayTaskItem({ task, className }: TodayTaskItemProps) {
  return (
    <li className={cn('text-sm font-normal line-clamp-1', className)}>
      {task.title}
    </li>
  );
}
