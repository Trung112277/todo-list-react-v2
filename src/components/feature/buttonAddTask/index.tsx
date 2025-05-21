import { Button } from '@/components/ui/button';
import { DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Dialog } from '@/components/ui/dialog';
import { SubTitle } from '../../common/title/subTitle';
import { FormAddTask } from '../formAdd/formAddTask';

export function ButtonAddTask() {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add new task</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <SubTitle>Add a task</SubTitle>
          </DialogTitle>
        </DialogHeader>
        <FormAddTask />
      </DialogContent>
    </Dialog>
  );
}
