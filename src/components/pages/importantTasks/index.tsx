import { useEffect } from 'react';
export function PageImportantTasks() {
  useEffect(() => {
    document.title = "To-Do List | Important Tasks";
  }, []);
  return (
    <div>
      <h1>Important Tasks</h1>
    </div>
  );
}
