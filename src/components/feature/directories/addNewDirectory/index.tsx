import { SubTitle } from '../../../common/title/subTitle';
import { AddNewDirectoryButton } from './addNewDirectoryButton';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { AddNewDirectoryForm } from './addNewDirectoryForm';
import { useState } from 'react';

export function AddNewDirectory() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AddNewDirectoryButton onClick={() => setOpen(true)} />
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <SubTitle>Create new directory</SubTitle>
            </DialogTitle>
          </DialogHeader>
          <AddNewDirectoryForm onSuccess={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
}
