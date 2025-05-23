import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { forwardRef } from 'react';

interface DateInputProps {
  title: string;
  error?: string;
}

function getTodayString() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

export const DateInput = forwardRef<HTMLInputElement, DateInputProps & React.InputHTMLAttributes<HTMLInputElement>>(
  ({ title, error, ...props }, ref) => {
    return (
      <div className="space-y-2 w-full">
        <Label className="text-lg text-gray-600">
          {title}
        </Label>
        <Input 
          ref={ref}
          type="date"
          min={getTodayString()}
          className={`block ${error ? "border-red-500" : ""}`}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);
