import { useEffect } from 'react';
import { StatusTitle } from '@/components/feature/title/statusTitle';
export function PageImportantTasks() {
  useEffect(() => {
    document.title = 'To-Do List | Important Tasks';
  }, []);
  return <StatusTitle />;
}
