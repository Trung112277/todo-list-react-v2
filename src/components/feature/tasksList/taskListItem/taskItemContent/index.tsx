import { memo } from 'react';
import { TaskItemMain } from './taskItemMain';
import { TaskItemProperties } from './taskItemProperties';
import { useTask } from '@/contexts/task';
import { useTaskItemId } from '@/contexts/taskItem/context';
import { TaskItemContentProvider } from '@/contexts/taskItemContent/context';

function TaskItemContentComponent() {
  const taskId = useTaskItemId();
  const { tasksMap } = useTask();
  const task = tasksMap.get(taskId);

  if (!task) return null;

  return (
    <TaskItemContentProvider task={task}>
      <article className="bg-slate-100 rounded-lg p-3 sm:p-4 flex text-left transition hover:shadow-lg hover:shadow-slate-300 dark:bg-slate-800 dark:hover:shadow-transparent flex-col h-52 sm:h-64">
        <TaskItemMain />
        <TaskItemProperties />
      </article>
    </TaskItemContentProvider>
  );
}

export const TaskItemContent = memo(TaskItemContentComponent);
