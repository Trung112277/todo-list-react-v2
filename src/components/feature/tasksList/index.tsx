import { useTask } from '@/contexts/task';
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';
import { TaskGrid } from './taskGrid';

export function TasksList() {
  const { tasks } = useTask();
  useKeyboardShortcuts();

  return <TaskGrid tasksCount={tasks.length} />;
}
  