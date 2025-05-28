import { useProgress } from '@/contexts/progress/context';

export function AllTasksProgress() {
  const { allTasksProgress } = useProgress();

  return (
    <div className="flex items-center justify-between">
      <h3 className="text-sm font-medium">All Tasks</h3>
      <span className="text-sm text-muted-foreground">
        {allTasksProgress.completed}/{allTasksProgress.total}
      </span>
    </div>
  );
}
