import { memo } from 'react';
import { TaskDescription } from "./taskDescription";
import { TaskDueDay } from "./taskDueDay";
import { TaskName } from "./taskName";
import { useTaskItemContent } from '@/contexts/taskItemContent/context';

function TaskItemMainComponent() {
  const { task } = useTaskItemContent();

  return (
    <div className="flex flex-col flex-1 gap-2">
      <TaskName />
      <TaskDescription />
      <TaskDueDay />
    </div>
  );
}

export const TaskItemMain = memo(TaskItemMainComponent);

