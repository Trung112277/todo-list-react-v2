import { SubTitle } from '../../../common/title/subTitle';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { EditDirectoryButton } from './editDirectoryButton';
import { EditDirectoryForm } from './editDirectoryForm';
import { useState } from 'react';

interface EditDirectoryProps {
  directoryId: string;
  initialName: string;
}

export function EditDirectory({ directoryId, initialName }: EditDirectoryProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <EditDirectoryButton onClick={() => setOpen(true)} />
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <SubTitle>Edit directory</SubTitle>
            </DialogTitle>
          </DialogHeader>
          <EditDirectoryForm 
            directoryId={directoryId} 
            initialName={initialName} 
            onSuccess={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
