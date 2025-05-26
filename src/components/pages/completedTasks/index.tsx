import { StatusTitle } from '@/components/common/title/statusTitle';
import { usePageTitle } from '@/hooks/usePageTitle';
import { useTask } from '@/contexts/task';
import { TaskListWithActions } from '@/components/feature/tasksList/taskListWithActions';

export function PageCompletedTasks() {
  usePageTitle('Completed Tasks');
  const { getTasksByStatus } = useTask();
  const tasks = getTasksByStatus('completed');

  return (
    <>
      <StatusTitle title="Completed Tasks" />
      <TaskListWithActions tasks={tasks} />
    </>
  );
}
