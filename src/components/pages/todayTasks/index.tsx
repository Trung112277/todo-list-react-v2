import { usePageTitle } from '@/hooks/usePageTitle';
import { useTask } from '@/contexts/task';
import { TaskListWithActions } from '@/components/feature/tasksList/taskListWithActions';

export function PageTodayTasks() {
  usePageTitle("Today's Tasks");
  const { getTasksByStatus } = useTask();
  const tasks = getTasksByStatus('today');

  return <TaskListWithActions tasks={tasks} title="Today's Tasks" />;
}
