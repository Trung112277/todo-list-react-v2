import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { forwardRef } from 'react';

interface ImportantCheckboxProps {
  error?: string;
  value?: boolean;
  onChange?: (value: boolean) => void;
}

export const ImportantCheckbox = forwardRef<
  HTMLDivElement,
  ImportantCheckboxProps
>(({ error, value = false, onChange, ...props }, ref) => {
  const handleChange = (checked: boolean) => {
    onChange?.(checked);
  };

  const handleLabelClick = () => {
    handleChange(!value);
  };

  return (
    <div className="space-y-2" ref={ref}>
      <div className="flex items-center space-x-2 cursor-pointer">
        <Checkbox
          id="important"
          checked={!!value}
          onCheckedChange={handleChange}
          className="h-5 w-5"
          {...props}
        />
        <Label
          htmlFor="important"
          className="text-gray-500 text-lg cursor-pointer select-none"
          onClick={handleLabelClick}
        >
          Mark as important
        </Label>
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
});
