import { useEffect } from 'react';
import { StatusTitle } from '@/components/feature/title/statusTitle';
export function PageTodayTasks() {
  useEffect(() => {
    document.title = 'To-Do List | Today Tasks';
  }, []);
  return <StatusTitle />
}
