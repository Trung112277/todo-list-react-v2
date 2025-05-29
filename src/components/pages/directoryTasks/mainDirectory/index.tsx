import { StatusTitle } from '@/components/common/title/statusTitle';
import { usePageTitle } from '@/hooks/usePageTitle';
export function PageMainDirectory() {
  usePageTitle('Main Directory');
  return <StatusTitle title="Main's Tasks" />;
}
