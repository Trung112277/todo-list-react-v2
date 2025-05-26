import { SubTitle } from '@/components/common/title/subTitle';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useTask } from '@/contexts/task';
import { useNavigate } from 'react-router-dom';

export function ButtonDeleteAllTasks() {
  const { deleteAllTasks } = useTask();
  const navigate = useNavigate();

  const handleDeleteAll = () => {
    deleteAllTasks();
    navigate('/');
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className='hover:text-red-500'>Delete All Tasks</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <SubTitle>Are you sure?</SubTitle>
          </AlertDialogTitle>
          <AlertDialogDescription className="text-lg text-gray-600">
            All data will be deleted permanently.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction 
            className="w-fit bg-red-500 hover:bg-red-600"
            onClick={handleDeleteAll}
          >
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
