import { memo } from 'react';
import { useTaskItemContent } from '@/contexts/taskItemContent/context';
import { useTask } from '@/contexts/task';
import { useTaskItemId } from '@/contexts/taskItem/context';
import { cn } from '@/lib/utils';
import { useLocation } from 'react-router-dom';

function TaskNameComponent() {
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

  return (
    <h3 className={cn(
      "text-lg font-medium line-clamp-1",
      isFirstTask 
        ? "text-white" 
        : "text-slate-700 dark:text-slate-200"
    )}>
      {task.title}
    </h3>
  );
}

export const TaskName = memo(TaskNameComponent);
