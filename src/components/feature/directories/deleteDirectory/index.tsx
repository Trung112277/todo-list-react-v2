import { SubTitle } from '@/components/common/title/subTitle';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { DeleteDirectoryButton } from './deleteDirectoryButton';
import { useDirectory } from '@/contexts/directory/context';
import { useLocation } from 'react-router-dom';

interface DeleteDirectoryProps {
  directoryId: string;
}

export function DeleteDirectory({ directoryId }: DeleteDirectoryProps) {
  const { deleteDirectory } = useDirectory();
  const location = useLocation();

  const handleDelete = () => {
    deleteDirectory(directoryId);
    if (location.pathname.startsWith(`/directory/${directoryId}`)) {
      window.location.href = '/';
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <DeleteDirectoryButton />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <SubTitle>Are you sure?</SubTitle>
          </AlertDialogTitle>
          <AlertDialogDescription className="text-lg text-gray-600">
            This directory and all its tasks will be deleted.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className='bg-slate-100'>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete} className="w-fit">Confirm</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
