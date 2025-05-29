import { usePageTitle } from '@/hooks/usePageTitle';
import { useTask } from '@/contexts/task';
import { TaskListWithActions } from '@/components/feature/tasksList/taskListWithActions';

export function PageCompletedTasks() {
  usePageTitle('Completed Tasks');
  const { getTasksByStatus } = useTask();
  const tasks = getTasksByStatus('completed');

  return <TaskListWithActions tasks={tasks} title="Completed Tasks" />;
}
