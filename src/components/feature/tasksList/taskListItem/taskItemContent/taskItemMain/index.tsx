import { memo } from 'react';
import { TaskDescription } from "./taskDescription";
import { TaskDueDay } from "./taskDueDay";
import { TaskName } from "./taskName";

interface TaskItemMainProps {
  taskId: string;
}

function TaskItemMainComponent({ taskId }: TaskItemMainProps) {
  return (
    <div className="flex flex-col flex-1 gap-2">
      <TaskName taskId={taskId} />
      <TaskDescription taskId={taskId} />
      <TaskDueDay taskId={taskId} />
    </div>
  );
}

export const TaskItemMain = memo(TaskItemMainComponent);

