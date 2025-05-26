import { StatusTitle } from '@/components/common/title/statusTitle';
import { usePageTitle } from '@/hooks/usePageTitle';
import { useTask } from '@/contexts/task';
import { TaskListWithActions } from '@/components/feature/tasksList/taskListWithActions';

export function PageTodayTasks() {
  usePageTitle("Today's Tasks");
  const { getTasksByStatus } = useTask();
  const tasks = getTasksByStatus('today');

  return (
    <>
      <StatusTitle title="Today's Tasks" />
      <TaskListWithActions tasks={tasks} />
    </>
  );
}
