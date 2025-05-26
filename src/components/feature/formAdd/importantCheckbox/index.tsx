import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface ImportantCheckboxProps {
  value: boolean;
  onChange: (checked: boolean) => void;
  error?: string;
}

export function ImportantCheckbox({ value, onChange, error }: ImportantCheckboxProps) {
  const handleChange = (checked: boolean | 'indeterminate') => {
    onChange(checked === true);
  };

  return (
    <div className="flex items-center gap-2">
      <Label className="text-md font-medium text-gray-700 cursor-pointer select-none flex items-center gap-2">
        <Checkbox
          checked={value}
          onCheckedChange={handleChange}
          className="cursor-pointer"
        />
        Mark as important
      </Label>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
} 