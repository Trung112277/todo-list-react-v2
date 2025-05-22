import { Button } from '@/components/ui/button';
import { FaListUl } from 'react-icons/fa';
export function ViewTasksList() {
  return (
    <Button
      variant="ghost"
      className="p-0 hover:bg-transparent hover:text-primary text-gray-400"
    >
      <FaListUl style={{ width: '25px', height: '25px' }} />
    </Button>
  );
}
