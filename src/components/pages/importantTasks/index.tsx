import { usePageTitle } from '@/hooks/usePageTitle';
import { StatusTitle } from '@/components/common/title/statusTitle';
export function PageImportantTasks() {
  usePageTitle('Important Tasks');
  return <StatusTitle />;
}
