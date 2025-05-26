import { FormDirectory } from '@/components/feature/formAdd/fomDirectory';

interface AddNewDirectoryFormProps {
  onSuccess?: () => void;
}

export function AddNewDirectoryForm({ onSuccess }: AddNewDirectoryFormProps) {
  return <FormDirectory buttonText="Create Directory" onSuccess={onSuccess} />;
}
