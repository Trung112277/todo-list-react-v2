import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';
import { TaskGrid } from './taskGrid';
import { TaskList } from './taskList';
import { Task } from '@/types/task';
import { useViewTasks } from '@/contexts/viewTasks/context';

interface TasksListProps {
  tasks: Task[];
}

export function TasksList({ tasks }: TasksListProps) {
  useKeyboardShortcuts();
  const { view } = useViewTasks();

  return view === 'grid' ? (
    <TaskGrid tasks={tasks} />
  ) : (
    <TaskList tasks={tasks} />
  );
}
  