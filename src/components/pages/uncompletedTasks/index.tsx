import { useEffect } from 'react';
export function PageUncompletedTasks() {
  useEffect(() => {
    document.title = "To-Do List | Uncompleted Tasks";
  }, []);
  return (
    <div>
      <h1>Uncompleted Tasks</h1>
    </div>
  );
}
