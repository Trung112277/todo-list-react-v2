import { Button } from '@/components/ui/button';
import { IoStar } from 'react-icons/io5';
import { useTask } from '@/contexts/task';
import { useTaskItemId } from '@/contexts/taskItem/context';
import { cn } from '@/lib/utils';
import { useLocation } from 'react-router-dom';

export function TaskItemImportant() {
  const { tasksMap, toggleTaskImportant, getTasksByStatus } = useTask();
  const taskId = useTaskItemId();
  const task = tasksMap.get(taskId);
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

  if (!task) return null; // Don't render if task not found

  const handleClick = () => {
    toggleTaskImportant(taskId);
  };

  return (
    <Button
      variant="ghost"
      onClick={handleClick}
      className={cn(
        "p-0 h-8 hover:bg-transparent"
      )}
    >
      <IoStar
        className={cn(
          "w-4 h-4",
          task.isImportant 
            ? "text-red-500" 
            : isFirstTask 
              ? "text-white" 
              : "text-gray-500"
        )}
        size={30}
        strokeWidth={1.5}
        style={{ width: '20px', height: '20px' }}
      />
    </Button>
  );
}
