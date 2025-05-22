import { StatusTitle } from '@/components/common/title/statusTitle';
import { usePageTitle } from '@/hooks/usePageTitle';
export function PageCompletedTasks() {
  usePageTitle('Completed Tasks');
  return (
    <StatusTitle title="Completed Tasks" />
  );
}
