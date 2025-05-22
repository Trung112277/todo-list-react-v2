import { StatusTitle } from '@/components/common/title/statusTitle';
import { usePageTitle } from '@/hooks/usePageTitle';

export function PageAllTasks() {
  usePageTitle('All Tasks');
  return <StatusTitle title="All Tasks" />;
}
