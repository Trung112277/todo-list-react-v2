import { AllTodayTasksProgress } from '../allTodayTasksProgress';
import { ProgressBar } from '../progressBar';

export function ProgressTodayTasks() {
  return (
    <div className="flex flex-col gap-4">
      <AllTodayTasksProgress />
      <ProgressBar value={4} />
    </div>
  );
}
