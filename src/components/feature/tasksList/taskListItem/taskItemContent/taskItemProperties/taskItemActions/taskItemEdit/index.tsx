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
import { useTaskItemId } from '@/contexts/taskItem/context';

export function TaskItemEdit() {
  const taskId = useTaskItemId();

  return (
    <Dialog>
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
