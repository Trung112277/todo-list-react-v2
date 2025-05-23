import { Button } from '@/components/ui/button';
import { IoStar } from 'react-icons/io5';
import { useTask } from '@/contexts/task';
import { useTaskItemId } from '@/contexts/taskItem/context';

export function TaskItemImportant() {
  const { tasksMap, toggleTaskImportant } = useTask();
  const taskId = useTaskItemId();
  const task = tasksMap.get(taskId);

  if (!task) return null; // Don't render if task not found

  const handleClick = () => {
    toggleTaskImportant(taskId);
  };

  return (
    <Button
      variant="ghost"
      onClick={handleClick}
      className="p-0 h-8 hover:bg-transparent"
    >
      <IoStar
        className={`text-gray-500 ${task.isImportant ? 'text-red-500' : ''}`}
        size={30}
        strokeWidth={1.5}
        style={{ width: '20px', height: '20px' }}
      />
    </Button>
  );
}
