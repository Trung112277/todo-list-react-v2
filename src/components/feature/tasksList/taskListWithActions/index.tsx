import { TasksList } from '..';
import { ActionsBox } from '@/layout/actionsBox';
import { Task } from '@/types/task';
import { useSearch } from '@/contexts/search/context';
import { useMemo } from 'react';
import { SearchTitle } from '@/components/common/title/searchTitle';
import { StatusTitle } from '@/components/common/title/statusTitle';

interface TaskListWithActionsProps {
  tasks: Task[];
  title?: string;
}

export function TaskListWithActions({ tasks, title }: TaskListWithActionsProps) {
  const { searchQuery } = useSearch();

  const filteredTasks = useMemo(() => {
    if (!searchQuery) return tasks;
    
    const query = searchQuery.toLowerCase();
    return tasks.filter(task => 
      task.title.toLowerCase().includes(query) ||
      task.description?.toLowerCase().includes(query)
    );
  }, [tasks, searchQuery]);

  return (
    <div className="flex flex-col gap-4">
      {searchQuery ? (
        <SearchTitle tasks={tasks} />
      ) : title ? (
        <StatusTitle title={title} />
      ) : null}
      <ActionsBox />
      <TasksList tasks={filteredTasks} />
    </div>
  );
} 