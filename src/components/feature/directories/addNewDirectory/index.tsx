import { SubTitle } from '../../title/subTitle';
import { AddNewDirectoryButton } from './addNewDirectoryButton';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { AddNewDirectoryForm } from './addNewDirectoryForm';
export function AddNewDirectory() {
  return (
    <Dialog>
      <DialogTrigger>
        <AddNewDirectoryButton />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <SubTitle>Create new directory</SubTitle>
          </DialogTitle>
          <DialogDescription>
            <AddNewDirectoryForm />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
