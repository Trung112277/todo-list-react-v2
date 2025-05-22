import { SubTitle } from '../../../common/title/subTitle';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { EditDirectoryButton } from './editDirectoryButton';
import { EditDirectoryForm } from './editDirectoryForm';

export function EditDirectory() {
  return (
    <Dialog>
      <DialogTrigger>
        <EditDirectoryButton />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <SubTitle>Edit directory</SubTitle>
          </DialogTitle>
        </DialogHeader>
        <EditDirectoryForm />
      </DialogContent>
    </Dialog>
  );
}
