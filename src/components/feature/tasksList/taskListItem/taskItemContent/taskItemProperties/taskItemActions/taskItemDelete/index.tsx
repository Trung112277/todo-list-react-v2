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
import { TaskItemDeleteButton } from './taskItemDeleteButton';
import { TaskItemDeleteProvider, useTaskItemDelete } from '@/contexts/taskItemDelete/context';

function TaskItemDeleteContent() {
  const { handleDelete } = useTaskItemDelete();

  return (
    <AlertDialog>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your task.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete} className='w-fit'>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
      <TaskItemDeleteButton />
    </AlertDialog>
  );
}

export function TaskItemDelete() {
  return (
    <TaskItemDeleteProvider>
      <TaskItemDeleteContent />
    </TaskItemDeleteProvider>
  );
}
