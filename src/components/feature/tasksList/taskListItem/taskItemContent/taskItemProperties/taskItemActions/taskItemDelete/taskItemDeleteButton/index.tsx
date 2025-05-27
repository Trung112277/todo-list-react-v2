import { BsTrash3Fill } from 'react-icons/bs';
import { Button } from '@/components/ui/button';
import { AlertDialogTrigger } from '@/components/ui/alert-dialog';

export function TaskItemDeleteButton() {
  return (
    <AlertDialogTrigger asChild>
      <Button
        variant="ghost"
        className="p-0 h-8 hover:bg-transparent hover:text-red-500"
      >
        <BsTrash3Fill 
          className=" w-4 h-4" 
          style={{ width: '20px', height: '20px' }} 
        />
      </Button>
    </AlertDialogTrigger>
  );
}
