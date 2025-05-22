import { Button } from '@/components/ui/button';
import { CiGrid41 } from 'react-icons/ci';

export function ViewTasksGrid() {
  return (
    <Button
      variant="ghost"
      className="p-0 hover:bg-transparent hover:text-primary text-gray-400"
    >
      <CiGrid41 style={{ width: '25px', height: '25px' }} />
    </Button>
  );
}
