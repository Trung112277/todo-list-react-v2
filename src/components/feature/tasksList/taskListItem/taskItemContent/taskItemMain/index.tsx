import { memo } from 'react';
import { TaskDescription } from "./taskDescription";
import { TaskDueDay } from "./taskDueDay";
import { TaskName } from "./taskName";
import { useTaskItemContent } from '@/contexts/taskItemContent/context';
import { cn } from '@/lib/utils';

interface TaskItemMainProps {
  view: 'grid' | 'list';
}

function TaskItemMainComponent({ view }: TaskItemMainProps) {
  const { task } = useTaskItemContent();

  return (
    <div className={cn(
      "flex flex-col flex-1 gap-2",
      view === 'list' && "sm:w-[80%] w-[60%] sm:pr-5 pr-2"
    )}>
      <TaskName />
      <TaskDescription />
      <TaskDueDay />
    </div>
  );
}

export const TaskItemMain = memo(TaskItemMainComponent);

