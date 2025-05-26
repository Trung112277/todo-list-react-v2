import { StatusTitle } from '@/components/common/title/statusTitle';
import { usePageTitle } from '@/hooks/usePageTitle';
import { useTask } from '@/contexts/task';
import { TaskListWithActions } from '@/components/feature/tasksList/taskListWithActions';

export function PageImportantTasks() {
  usePageTitle('Important Tasks');
  const { getTasksByStatus } = useTask();
  const tasks = getTasksByStatus('important');

  return (
    <>
      <StatusTitle title="Important Tasks" />
      <TaskListWithActions tasks={tasks} />
    </>
  );
}
