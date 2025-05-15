import { useEffect } from 'react';

export function PageAllTasks() {
  useEffect(() => {
    document.title = "To-Do List | All Tasks";
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-bold text-red-500">All Tasks</h1>
    </div>
  );
}