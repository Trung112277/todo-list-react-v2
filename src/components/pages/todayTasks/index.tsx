import { useEffect } from 'react';
export function PageTodayTasks() {
  useEffect(() => {
    document.title = "To-Do List | Today Tasks";
  }, []);
  return (
    <div>
      <h1>Today Tasks</h1>
    </div>
  );
}
