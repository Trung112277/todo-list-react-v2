import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
export function PageImportantTasks() {
  useEffect(() => {
    document.title = "To-Do List | Important Tasks";
  }, []);
  return (
    <h1 className="text-2xl font-bold text-red-500">Important Tasks</h1>
  );
}
