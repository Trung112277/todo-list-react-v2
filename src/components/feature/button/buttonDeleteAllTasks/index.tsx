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
    <div className="mb-3 text-center">
      <AlertDialog>
        <AlertDialogTrigger className="hover:text-red-500">
          Delete All Tasks
        </AlertDialogTrigger>
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
            <AlertDialogCancel className="bg-slate-100">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="w-fit bg-primary"
              onClick={handleDeleteAll}
            >
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
