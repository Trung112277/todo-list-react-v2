import { useProgress } from '@/contexts/progress/context';

export function AllTodayTasksProgress() {
  const { todayTasksProgress } = useProgress();

  return (
    <div className="flex items-center justify-between">
      <h3 className="text-sm font-medium">Today's Tasks</h3>
      <span className="text-sm text-muted-foreground">
        {todayTasksProgress.completed}/{todayTasksProgress.total}
      </span>
    </div>
  );
}
