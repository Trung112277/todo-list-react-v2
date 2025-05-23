import { Button } from '@/components/ui/button';
import { DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Dialog } from '@/components/ui/dialog';
import { SubTitle } from '@/components/common/title/subTitle';
import { FormTask } from '@/components/feature/formAdd/formTask';
import { useTaskDialog } from '@/hooks/useTaskDialog';

export function ButtonAddTask() {
  const { isOpen, openDialog, closeDialog } = useTaskDialog();

  return (
    <Dialog open={isOpen} onOpenChange={(open) => open ? openDialog() : closeDialog()}>
      <DialogTrigger asChild>
        <Button>Add new task</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <SubTitle>Add a task</SubTitle>
          </DialogTitle>
        </DialogHeader>
        <FormTask name="Add new task" />
      </DialogContent>
    </Dialog>
  );
}
