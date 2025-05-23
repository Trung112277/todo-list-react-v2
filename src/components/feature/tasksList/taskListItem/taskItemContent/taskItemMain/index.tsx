import { TaskDescription } from "./taskDescription";
import { TaskDueDay } from "./taskDueDay";
import { TaskName } from "./taskName";

export function TaskItemMain() {
  return ( <div className="flex flex-col flex-1 gap-2">
      <TaskName />
      <TaskDescription />
      <TaskDueDay />
    </div>
  );
}

