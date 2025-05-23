import { FaCalendarDays } from 'react-icons/fa6';

export function TaskDueDay() {
  return (
    <time
      className="mt-auto flex w-full items-center gap-2 text-md text-slate-500 dark:text-slate-400"
      dateTime="2025-05-23"
    >
      <FaCalendarDays />
      05/23/2025
    </time>
  );
}
