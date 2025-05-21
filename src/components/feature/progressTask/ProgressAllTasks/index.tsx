import { AllTasksProgress } from '../allTasksProgress';
import { ProgressBar } from '../progressBar';

export function ProgressAllTasks() {
  return (
    <div className="flex flex-col gap-4">
      <AllTasksProgress />
      <ProgressBar value={4} />
    </div>
  );
}
