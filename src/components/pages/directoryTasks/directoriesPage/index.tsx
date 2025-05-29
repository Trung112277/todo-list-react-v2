import { useParams } from 'react-router-dom';
import { useDirectory } from '@/contexts/directory/context';
import { useTask } from '@/contexts/task';
import { usePageTitle } from '@/hooks/usePageTitle';
import { TaskListWithActions } from '@/components/feature/tasksList/taskListWithActions';
import { useMemo } from 'react';

const DirectoriesPage = () => {
  const { directoryId } = useParams();
  const { directoriesMap } = useDirectory();
  const { tasks } = useTask();
  const directory = directoryId ? directoriesMap.get(directoryId) : undefined;
  usePageTitle(directory?.name || 'Directory');

  // Memoize filtered tasks to prevent unnecessary re-renders
  const directoryTasks = useMemo(() => {
    if (!directoryId || !tasks) return [];
    return tasks.filter((task) => task.directoryId === directoryId);
  }, [tasks, directoryId]);

  if (!directory) return null;

  return (
    <TaskListWithActions 
      tasks={directoryTasks} 
      title={`${directory.name} Tasks`}
    />
  );
};

export default DirectoriesPage;
