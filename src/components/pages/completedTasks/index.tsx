import { usePageTitle } from '@/hooks/usePageTitle';
export function PageCompletedTasks() {
  usePageTitle('Completed Tasks');
  return (
    <h1 className="text-2xl font-bold text-red-500">Completed Tasks</h1>
  );
}
