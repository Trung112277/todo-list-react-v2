import { TaskDescription } from "./taskDescription";
import { TaskDueDay } from "./taskDueDay";
import { TaskName } from "./taskName";

interface TaskItemMainProps {
  taskId: string;
}

export function TaskItemMain({ taskId }: TaskItemMainProps) {
  return (
    <div className="flex flex-col flex-1 gap-2">
      <TaskName taskId={taskId} />
      <TaskDescription taskId={taskId} />
      <TaskDueDay taskId={taskId} />
    </div>
  );
}

