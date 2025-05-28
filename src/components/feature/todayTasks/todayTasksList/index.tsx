import { TodayTaskItem } from '../todayTaskitem';
import { cn } from '@/lib/utils';
import { Task } from '@/types/task';

interface TodayTasksListProps {
  className?: string;
  tasks: Task[];
}

export function TodayTasksList({ className, tasks }: TodayTasksListProps) {
  return (
    <ul className={cn('flex flex-col gap-2 pl-4', className)}>
      {tasks.map((task) => (
        <TodayTaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
