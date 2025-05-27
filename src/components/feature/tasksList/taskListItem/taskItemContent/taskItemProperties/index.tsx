import { memo } from 'react';
import { TaskItemStatus } from './taskItemStatus';
import { TaskItemActions } from './taskItemActions';
import { useTaskItemContent } from '@/contexts/taskItemContent/context';
import { cn } from '@/lib/utils';

interface TaskItemPropertiesProps {
  view: 'grid' | 'list';
}

function TaskItemPropertiesComponent({ view }: TaskItemPropertiesProps) {
  const { task } = useTaskItemContent();

  return (
    <div className={cn(
      "flex gap-4 justify-between items-center",
      view === 'grid' 
        ? "border-dashed border-slate-200 dark:border-slate-700/[.3] border-t-2 w-full pt-4 mt-4" 
        : "w-[20%] flex justify-end"
    )}>
      <TaskItemStatus isCompleted={task.isCompleted} />
      <TaskItemActions />
    </div>
  );
}

export const TaskItemProperties = memo(TaskItemPropertiesComponent);

