import { ViewTasksGrid } from './viewTasksGrid';
import { ViewTasksList } from './viewTasksList';

export function ViewTasks() {
  return (
    <div className="flex gap-4 items-center">
      <ViewTasksList />
      <ViewTasksGrid />
    </div>
  );
}
