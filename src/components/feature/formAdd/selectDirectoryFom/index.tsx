import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { forwardRef } from 'react';

interface SelectFormProps {
  title: string;
  directories?: string[];
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
}

const defaultDirectories = ['Main'];

export const SelectForm = forwardRef<HTMLDivElement, SelectFormProps>(
  ({ title, directories = defaultDirectories, value = 'Main', onChange, error, ...props }, ref) => {
    return (
      <div className="space-y-2 w-full">
        <Label className="flex flex-col gap-2 text-lg text-gray-600">{title}</Label>
        <Select value={value} onValueChange={onChange} required {...props}>
          <SelectTrigger>
            <SelectValue placeholder="Select a directory" />
          </SelectTrigger>
          <SelectContent className="border-none">
            {directories.map((dir) => (
              <SelectItem key={dir} value={dir}>{dir}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);
