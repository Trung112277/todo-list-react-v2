import { TaskItem } from './taskItem';
import { TaskItemIdProvider } from '@/contexts/taskItem/context';

interface TaskCellProps {
  taskId: string;
}

export function TaskCell({ taskId }: TaskCellProps) {
  return (
    <TaskItemIdProvider taskId={taskId}>
      <TaskItem />
    </TaskItemIdProvider>
  );
} 