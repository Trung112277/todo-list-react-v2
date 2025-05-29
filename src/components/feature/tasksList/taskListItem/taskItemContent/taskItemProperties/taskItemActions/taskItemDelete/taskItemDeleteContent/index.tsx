import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useTaskItemDelete } from '@/contexts/taskItemDelete/context';
import { TaskItemDeleteButton } from '../taskItemDeleteButton';
import { SubTitle } from '@/components/common/title/subTitle';

export function TaskItemDeleteContent() {
  const { handleDelete } = useTaskItemDelete();

  return (
    <AlertDialog>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <SubTitle>Are you sure?</SubTitle>
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            task.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className='bg-slate-100'>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete} className="w-fit">
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
      <TaskItemDeleteButton />
    </AlertDialog>
  );
}
