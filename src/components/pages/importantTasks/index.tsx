import { useEffect } from 'react';
import { StatusTitle } from '@/components/common/title/statusTitle';
export function PageImportantTasks() {
  useEffect(() => {
    document.title = 'To-Do List | Important Tasks';
  }, []);
  return <StatusTitle />;
}
