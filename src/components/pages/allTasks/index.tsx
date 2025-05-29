import { usePageTitle } from '@/hooks/usePageTitle';
import { useTask } from '@/contexts/task';
import { TaskListWithActions } from '@/components/feature/tasksList/taskListWithActions';

export function PageAllTasks() {
  usePageTitle('All Tasks');
  const { getTasksByStatus } = useTask();
  const tasks = getTasksByStatus('all');

  return <TaskListWithActions tasks={tasks} title="All Tasks" />;
}
  