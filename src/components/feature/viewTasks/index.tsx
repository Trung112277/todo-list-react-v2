import { ViewTasksGrid } from './viewTasksGrid';
import { ViewTasksList } from './viewTasksList';
import { useViewTasks } from '@/contexts/viewTasks/context';

export function ViewTasks() {
  const { view, setView } = useViewTasks();

  return (
    <div className="flex gap-4 items-center">
      <ViewTasksList 
        isActive={view === 'list'}
        onClick={() => setView('list')}
      />
      <ViewTasksGrid 
        isActive={view === 'grid'}
        onClick={() => setView('grid')}
      />
    </div>
  );
}
