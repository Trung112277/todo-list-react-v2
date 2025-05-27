import { Notification } from './notification';
import { useTask } from '@/contexts/task';
import { ButtonAddTask } from '@/components/feature/button/buttonAddTask';


export function NotificationBox() {
  const { getTasksByStatus } = useTask();
  const todayTasks = getTasksByStatus('today').filter(task => !task.isCompleted);
  const hasTodayTasks = todayTasks.length > 0;

  return (
    <div className="relative flex items-center gap-5">
      <Notification hasTodayTasks={hasTodayTasks} tasks={todayTasks} />
      <ButtonAddTask />
    </div>
  );
}
