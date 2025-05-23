import { useTaskItemContent } from '@/contexts/taskItemContent/context';
import { FaCalendarDays } from 'react-icons/fa6';

export function TaskDueDay() {
  const { task } = useTaskItemContent();

  // Ensure dueDate is a Date object from the string
  const dueDateObj = new Date(task.dueDate);

  // Check for valid date before rendering
  if (isNaN(dueDateObj.getTime())) {
    console.error('Invalid dueDate string:', task.dueDate);
    return null; // Or render an error indicator
  }

  return (
    <time
      className="mt-auto flex w-full items-center gap-2 text-md text-slate-500 dark:text-slate-400"
      dateTime={dueDateObj.toISOString().split('T')[0]}
    >
      <FaCalendarDays />
      {dueDateObj.toLocaleDateString()}
    </time>
  );
}
