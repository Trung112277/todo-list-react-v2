import { SortTasks } from '@/components/feature/sortTasks';
import { ViewTasks } from '@/components/feature/viewTasks';

export function ActionsBox() {
  return (
    <div className="flex items-center justify-between">
      <ViewTasks />
      <SortTasks />
    </div>
  );
}
