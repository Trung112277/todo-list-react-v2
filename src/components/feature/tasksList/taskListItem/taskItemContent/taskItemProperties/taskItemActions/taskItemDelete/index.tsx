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
import { useTask } from '@/contexts/task';
import { useTaskItemId } from '@/contexts/taskItem/context';

export function TaskItemDelete() {
  const { deleteTask } = useTask();
  const taskId = useTaskItemId();

  const handleDelete = () => {
    deleteTask(taskId);
  };

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
          <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
      <TaskItemDeleteButton />
    </AlertDialog>
  );
}
