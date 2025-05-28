import { AllTasksProgress } from '../allTasksProgress';
import { ProgressBar } from '../progressBar';
import { useProgress } from '@/contexts/progress/context';

export function ProgressAllTasks() {
  const { allTasksProgress } = useProgress();

  if (allTasksProgress.total === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4">
      <AllTasksProgress />
      <ProgressBar value={allTasksProgress.percentage} />
    </div>
  );
}
