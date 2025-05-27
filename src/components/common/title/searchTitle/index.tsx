import { useSearch } from '@/contexts/search/context';
import { Task } from '@/types/task';

interface SearchTitleProps {
  tasks: Task[];
}

export function SearchTitle({ tasks }: SearchTitleProps) {
  const { searchQuery } = useSearch();
  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-1 mt-5 sm:mt-8 ">
      <h1 className="text-2xl font-semibold text-slate-700 dark:text-slate-200">
        Results for "{searchQuery}"
      </h1>
      <p className="text-md text-slate-500 dark:text-slate-400">
        {filteredTasks.length} {filteredTasks.length === 1 ? 'task' : 'tasks'} found
      </p>
    </div>
  );
} 