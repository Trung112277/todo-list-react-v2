import { usePageTitle } from '@/hooks/usePageTitle';
import { StatusTitle } from '@/components/common/title/statusTitle';

export function PageTodayTasks() {
  usePageTitle('Today Tasks');
  return <StatusTitle title="Today Tasks" />
}
