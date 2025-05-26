import { FormDirectory } from '@/components/feature/formAdd/fomDirectory';

interface EditDirectoryFormProps {
  directoryId: string;
  initialName: string;
  onSuccess?: () => void;
}

export function EditDirectoryForm({ directoryId, initialName, onSuccess }: EditDirectoryFormProps) {
  return (
    <FormDirectory
      buttonText="Save Changes"
      directoryId={directoryId}
      initialName={initialName}
      onSuccess={onSuccess}
    />
  );
}

