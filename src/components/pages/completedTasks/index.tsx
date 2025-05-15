import { useEffect } from 'react';
export function PageCompletedTasks() {
  useEffect(() => {
    document.title = "To-Do List | Completed Tasks";
  }, []);
  return (
    <div>
      <h1>Completed Tasks</h1>
    </div>
  );
}
