import { memo } from 'react';
import { TaskItemMain } from './taskItemMain';
import { TaskItemProperties } from './taskItemProperties';
import { useTask } from '@/contexts/task';
import { useTaskItemId } from '@/contexts/taskItem/context';
import { TaskItemContentProvider } from '@/contexts/taskItemContent/context';
import { cn } from '@/lib/utils';
import { useLocation } from 'react-router-dom';

function TaskItemContentComponent() {
  const taskId = useTaskItemId();
  const { tasksMap, getTasksByStatus } = useTask();
  const task = tasksMap.get(taskId);
  const location = useLocation();

  // Get the current status from the path
  const getStatusFromPath = (path: string) => {
    if (path === '/') return 'all';
    if (path === '/today') return 'today';
    if (path === '/important') return 'important';
    if (path === '/completed') return 'completed';
    if (path === '/uncompleted') return 'uncompleted';
    return 'all';
  };

  const status = getStatusFromPath(location.pathname);
  const filteredTasks = getTasksByStatus(status);
  const isFirstTask = filteredTasks[0]?.id === taskId;

  if (!task) return null;

  return (
    <TaskItemContentProvider task={task}>
      <article className={cn(
        "rounded-lg p-3 sm:p-4 flex text-left transition hover:shadow-lg hover:shadow-slate-300 flex-col h-52 sm:h-64",
        isFirstTask 
          ? "bg-primary text-white dark:bg-primary dark:text-white" 
          : "bg-slate-100 dark:bg-slate-800 dark:hover:shadow-transparent"
      )}>
        <TaskItemMain />
        <TaskItemProperties />
      </article>
    </TaskItemContentProvider>
  );
}

export const TaskItemContent = memo(TaskItemContentComponent);
