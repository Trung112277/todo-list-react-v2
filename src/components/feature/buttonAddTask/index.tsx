import { Button } from '@/components/ui/button';
import { Dialog } from '@/components/ui/dialog';
import { DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { SubTitle } from '../title/subTitle';
import { FormAddTask } from '../formAdd/formAddTask';
export function ButtonAddTask() {
  return (
    <Dialog>
      <DialogTrigger className='w-full'>
        <Button >Add new task</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <SubTitle>Add a task</SubTitle>
          </DialogTitle>
          <DialogDescription>
            <FormAddTask />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
