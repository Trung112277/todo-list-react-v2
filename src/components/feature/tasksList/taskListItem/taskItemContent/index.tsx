import { TaskItemMain } from './taskItemMain';
import { TaskItemProperties } from './taskItemProperties';

interface TaskItemContentProps {
  taskId: string;
}

export function TaskItemContent({ taskId }: TaskItemContentProps) {
  return (
    <article className="bg-slate-100 rounded-lg p-3 sm:p-4 flex text-left transition hover:shadow-lg hover:shadow-slate-300 dark:bg-slate-800 dark:hover:shadow-transparent flex-col h-52 sm:h-64">
      <TaskItemMain taskId={taskId} />
      <TaskItemProperties taskId={taskId} />
    </article>
  );
}
