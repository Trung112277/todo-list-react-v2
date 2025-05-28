import { AllTodayTasksProgress } from '../allTodayTasksProgress';
import { ProgressBar } from '../progressBar';
import { useProgress } from '@/contexts/progress/context';

export function ProgressTodayTasks() {
  const { todayTasksProgress, hasTodayTasks } = useProgress();

  if (!hasTodayTasks || todayTasksProgress.total === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4">
      <AllTodayTasksProgress />
      <ProgressBar value={todayTasksProgress.percentage} />
    </div>
  );
}
