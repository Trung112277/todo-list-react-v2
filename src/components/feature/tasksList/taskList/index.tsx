import { TaskListItem } from '../taskListItem';
import { ButtonAddTaskList } from '@/components/feature/button/buttonAddTaskList';
import { Task } from '@/types/task';

interface TaskListProps {
  tasks?: Task[];
}

export function TaskList({ tasks = [] }: TaskListProps) {
  return (
    <div className="mt-5 mb-10">
      <ul className="flex flex-col gap-6">
        {tasks.map(task => (  
          <TaskListItem key={task.id} taskId={task.id} />
        ))}
        <ButtonAddTaskList />
      </ul>
    </div>
  );
} 