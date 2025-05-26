import { Badge } from '@/components/ui/badge';
import { NavLink } from 'react-router-dom';
import { useTask } from '@/contexts/task';
import { useDirectory } from '@/contexts/directory/context';

interface BadgeTaskProps {
  taskId: string;
}

export function BadgeTask({ taskId }: BadgeTaskProps) {
  const { tasksMap } = useTask();
  const { directoriesMap } = useDirectory();
  const task = tasksMap.get(taskId);

  if (!task) return null;

  const directory = directoriesMap.get(task.directoryId);
  if (!directory) return null;

  return (
    <Badge className="text-md font-normal rounded-bl-[0] rounded-br-[0] ml-auto mr-4 w-min whitespace-nowrap overflow-hidden max-w-[10rem] text-center text-ellipsis bg-rose-200 text-rose-600 px-4 py-1 rounded-t-md transition dark:bg-slate-700 dark:text-slate-200 block hover:bg-rose-300 dark:hover:bg-rose-500">
      <NavLink to={`/directory/${task.directoryId}`}>{directory.name}</NavLink>
    </Badge>
  );
}
