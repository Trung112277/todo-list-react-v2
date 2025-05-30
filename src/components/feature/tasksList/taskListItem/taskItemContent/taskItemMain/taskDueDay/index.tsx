import { useTaskItemContent } from '@/contexts/taskItemContent/context';
import { FaCalendarDays } from 'react-icons/fa6';
import { useTask } from '@/contexts/task';
import { useTaskItemId } from '@/contexts/taskItem/context';
import { cn } from '@/lib/utils';
import { useLocation } from 'react-router-dom';

export function TaskDueDay() {
  const { task } = useTaskItemContent();
  const taskId = useTaskItemId();
  const { getTasksByStatus } = useTask();
  const location = useLocation();

  const getStatusFromPath = (path: string) => {
    if (path === '/') return 'all';
    if (path === '/today') return 'today';
    if (path === '/important') return 'important';
    if (path === '/completed') return 'completed';
    if (path === '/uncompleted') return 'uncompleted';
    if (path.startsWith('/directory/')) return 'all';
    return 'all';
  };

  const status = getStatusFromPath(location.pathname);
  let filteredTasks = getTasksByStatus(status);

  if (location.pathname.startsWith('/directory/')) {
    const directoryId = location.pathname.split('/').pop();
    filteredTasks = filteredTasks.filter(task => task.directoryId === directoryId);
  }

  const isFirstTask = filteredTasks[0]?.id === taskId;

  // Ensure dueDate is a Date object from the string
  const dueDateObj = new Date(task.dueDate);

  // Check for valid date before rendering
  if (isNaN(dueDateObj.getTime())) {
    console.error('Invalid dueDate string:', task.dueDate);
    return null; // Or render an error indicator
  }

  return (
    <time
      className={cn(
        "mt-auto flex w-full items-center gap-2 text-md",
        isFirstTask 
          ? "text-white" 
          : "text-slate-500 dark:text-slate-400"
      )}
      dateTime={dueDateObj.toISOString().split('T')[0]}
    >
      <FaCalendarDays className={cn(
        isFirstTask 
          ? "text-white" 
          : "text-slate-500 dark:text-slate-400"
      )} />
      {dueDateObj.toLocaleDateString()}
    </time>
  );
}
