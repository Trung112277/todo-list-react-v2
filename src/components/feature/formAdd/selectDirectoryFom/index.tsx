import { Label } from '@/components/ui/label';
import { forwardRef } from 'react';
import { useDirectory } from '@/contexts/directory/context';
import { useTaskForm } from '@/contexts/taskForm/context';

interface SelectFormProps {
  title: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  name?: string;
  register?: any;
}

export const SelectForm = forwardRef<HTMLDivElement, SelectFormProps>(
  ({ title, value = 'main', onChange, error, name = 'directoryId', register, ...props }, ref) => {
    const { directories } = useDirectory();
    const { taskId } = useTaskForm();

    return (
      <div className="space-y-2 w-full">
        <Label className="flex flex-col gap-2 text-lg text-gray-600">{title}</Label>
        <select
          className="w-full h-12 rounded-md bg-slate-100 px-3 py-2 text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary"
          defaultValue={value}
          {...(register ? register(name) : {})}
          {...props}
        >
          {directories.map((dir) => (
            <option 
              key={dir.id} 
              value={dir.id}
            >
              {dir.name}
            </option>
          ))}
        </select>
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);
