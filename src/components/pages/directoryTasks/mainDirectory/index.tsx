import { usePageTitle } from '@/hooks/usePageTitle';

export function PageMainDirectory() {
  usePageTitle('Main Directory');
  return (
    <div>
      <h1 className="text-2xl font-bold text-red-500">Main Directory</h1>
    </div>
  );
}
