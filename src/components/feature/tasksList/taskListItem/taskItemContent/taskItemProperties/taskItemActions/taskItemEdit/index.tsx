import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Dialog } from '@/components/ui/dialog';
import { SubTitle } from '@/components/common/title/subTitle';
import { FormTask } from '@/components/feature/formAdd/formTask';
import { TaskItemEditButton } from './taskItemEditButton';
import { TaskItemEditProvider } from '@/contexts/taskItemEdit/context';
import { useTaskItemEdit } from '@/contexts/taskItemEdit/context';

function TaskItemEditContent() {
  const { taskId, isOpen, openDialog, closeDialog } = useTaskItemEdit();

  return (
    <Dialog open={isOpen} onOpenChange={(open) => open ? openDialog() : closeDialog()}>
      <DialogTrigger>
        <TaskItemEditButton />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <SubTitle>Edit task</SubTitle>
          </DialogTitle>
        </DialogHeader>
        <FormTask taskId={taskId} />
      </DialogContent>
    </Dialog>
  );
}

export function TaskItemEdit() {
  return (
    <TaskItemEditProvider>
      <TaskItemEditContent />
    </TaskItemEditProvider>
  );
}
