import { StatusTitle } from '@/components/common/title/statusTitle';
import { usePageTitle } from '@/hooks/usePageTitle';
export function PageUncompletedTasks() {
  usePageTitle('Uncompleted Tasks');
  return <StatusTitle title="Uncompleted Tasks" />;
}
