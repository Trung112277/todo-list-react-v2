import { StatusTitle } from '@/components/feature/title/statusTitle';
import { useEffect } from 'react';
export function PageUncompletedTasks() {
  useEffect(() => {
    document.title = 'To-Do List | Uncompleted Tasks';
  }, []);
  return <StatusTitle />;
}
