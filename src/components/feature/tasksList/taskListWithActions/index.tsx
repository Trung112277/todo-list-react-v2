import { TasksList } from '..';
import { ActionsBox } from '@/layout/actionsBox';
import { Task } from '@/types/task';

interface TaskListWithActionsProps {
  tasks: Task[];
}

export function TaskListWithActions({ tasks }: TaskListWithActionsProps) {
  return (
    <div className="flex flex-col gap-4">
      <ActionsBox />
      <TasksList tasks={tasks} />
    </div>
  );
} 