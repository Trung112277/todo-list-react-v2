import { useEffect } from 'react';
export function PageCompletedTasks() {
  useEffect(() => {
    document.title = "To-Do List | Completed Tasks";
  }, []);
  return (
    <h1 className="text-2xl font-bold text-red-500">Completed Tasks</h1>
  );
}
