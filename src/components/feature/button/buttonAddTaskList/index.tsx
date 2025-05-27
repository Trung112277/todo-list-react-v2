import { Button } from '@/components/ui/button';
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Dialog } from '@/components/ui/dialog';
import { SubTitle } from '@/components/common/title/subTitle';
import { FormTask } from '@/components/feature/formAdd/formTask';
import { useTaskDialog } from '@/hooks/useTaskDialog';

export function ButtonAddTaskList() {
  const { isOpen, openDialog, closeDialog } = useTaskDialog();

  return (
    <Dialog open={isOpen} onOpenChange={(open) => open ? openDialog() : closeDialog()}>
      <DialogTrigger asChild>
        <Button
          data-add-task
          className="bg-transparent border-2 border-slate-300 shadow-none
            text-slate-400 w-full rounded-lg
            border-dashed transition hover:bg-slate-300
            hover:text-slate-500
            dark:border-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-300 h-52 sm:h-64"
        >
          Add new task
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <SubTitle>Add a task</SubTitle>
          </DialogTitle>
        </DialogHeader>
        <FormTask />
      </DialogContent>
    </Dialog>
  );
}
