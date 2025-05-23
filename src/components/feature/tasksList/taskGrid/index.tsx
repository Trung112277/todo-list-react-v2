import { useTask } from '@/contexts/task';
import { TaskCell } from '../taskCell';
import { ButtonAddTaskList } from '@/components/feature/button/buttonAddTaskList';

export function TaskGrid() {
  const { tasks } = useTask();

  return (
    <div className="mt-5 mb-10">
      <div className="grid gap-2 sm:gap-4 xl:gap-6 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 items-end">
        {tasks.map(task => (
          <TaskCell key={task.id} taskId={task.id} />
        ))}
        <ButtonAddTaskList />
      </div>
    </div>
  );
} 