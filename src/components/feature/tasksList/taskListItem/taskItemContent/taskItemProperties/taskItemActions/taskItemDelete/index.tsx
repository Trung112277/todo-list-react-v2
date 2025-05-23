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
import { TaskItemDeleteButton } from './taskItemDeleteButton';

export function TaskItemDelete() {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <TaskItemDeleteButton />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <SubTitle>Are you sure?</SubTitle>
          </AlertDialogTitle>
          <AlertDialogDescription className="text-lg text-gray-600">
            This task will be deleted permanently.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="w-fit">Confirm</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
