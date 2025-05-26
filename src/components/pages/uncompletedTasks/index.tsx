import { StatusTitle } from '@/components/common/title/statusTitle';
import { usePageTitle } from '@/hooks/usePageTitle';
import { useTask } from '@/contexts/task';
import { TaskListWithActions } from '@/components/feature/tasksList/taskListWithActions';

export function PageUncompletedTasks() {
  usePageTitle('Uncompleted Tasks');
  const { getTasksByStatus } = useTask();
  const tasks = getTasksByStatus('uncompleted');

  return (
    <>
      <StatusTitle title="Uncompleted Tasks" />
      <TaskListWithActions tasks={tasks} />
    </>
  );
}
