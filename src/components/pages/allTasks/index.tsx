import { usePageTitle } from '@/hooks/usePageTitle';

export function PageAllTasks() {
  usePageTitle('All Tasks');
  return (
    <div>
      <h1 className="text-2xl font-bold text-red-500">All Tasks</h1>
    </div>
  );
}