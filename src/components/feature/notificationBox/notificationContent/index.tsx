import { TodayTasksList } from '../../todayTasks/todayTasksList';

export function NotificationContent() {
  return (
    <div className="flex flex-col gap-2 max-w-[300px]">
      <span className="dark:text-slate-200 font-medium">
        You have 1 uncompleted tasks today:
      </span>
      <TodayTasksList className="pl-0" />
    </div>
  );
}
