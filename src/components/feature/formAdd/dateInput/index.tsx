import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { forwardRef } from 'react';
import { getTodayString } from '@/constants/date';

interface DateInputProps {
  title: string;
  error?: string;
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
