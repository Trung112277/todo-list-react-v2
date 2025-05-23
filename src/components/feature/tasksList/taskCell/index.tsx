import { TaskItem } from './taskItem';

interface TaskCellProps {
  taskId: string;
}

export function TaskCell({ taskId }: TaskCellProps) {
  // TaskItem component will handle fetching task data using taskId
  return <TaskItem taskId={taskId} />;
} 