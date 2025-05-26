import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';
import { TaskGrid } from './taskGrid';
import { Task } from '@/types/task';

interface TasksListProps {
  tasks: Task[];
}

export function TasksList({ tasks }: TasksListProps) {
  useKeyboardShortcuts();

  return <TaskGrid tasks={tasks} />;
}
  