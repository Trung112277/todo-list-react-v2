import { memo } from 'react';
import { TaskItemMain } from './taskItemMain';
import { TaskItemProperties } from './taskItemProperties';
import { useTask } from '@/contexts/task';
import { useTaskItemId } from '@/contexts/taskItem/context';
import { TaskItemContentProvider } from '@/contexts/taskItemContent/context';
import { cn } from '@/lib/utils';
import { useLocation } from 'react-router-dom';
import { useViewTasks } from '@/contexts/viewTasks/context';

function TaskItemContentComponent() {
  const taskId = useTaskItemId();
  const { tasksMap, getTasksByStatus } = useTask();
  const task = tasksMap.get(taskId);
  const location = useLocation();
  const { view } = useViewTasks();

  // Get the current status from the path
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

  // If we're in a directory page, filter tasks by directoryId
  if (location.pathname.startsWith('/directory/')) {
    const directoryId = location.pathname.split('/').pop();
    filteredTasks = filteredTasks.filter(task => task.directoryId === directoryId);
  }

  const isFirstTask = filteredTasks[0]?.id === taskId;

  if (!task) return null;

  return (
    <TaskItemContentProvider task={task}>
      <article className={cn(
        "rounded-lg p-3 sm:p-4 flex text-left transition hover:shadow-lg hover:shadow-slate-300 dark:hover:shadow-transparent",
        view === 'grid' 
          ? "flex-col h-52 sm:h-64" 
          : "flex-row sm:h-[150px] h-[120px]",
        isFirstTask 
          ? "bg-primary text-white dark:bg-primary dark:text-white" 
          : "bg-slate-100 dark:bg-slate-800"
      )}>
        <TaskItemMain view={view} />
        <TaskItemProperties view={view} />
      </article>
    </TaskItemContentProvider>
  );
}

export const TaskItemContent = memo(TaskItemContentComponent);
