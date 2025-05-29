import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { forwardRef } from 'react';

interface InputFormProps {
  title: string;
  placeholder: string;
  type: string;
  error?: string;
}

export const InputForm = forwardRef<HTMLInputElement, InputFormProps & React.InputHTMLAttributes<HTMLInputElement>>(
  ({ title, placeholder, type, error, ...props }, ref) => {
    return (
      <div className="space-y-2">
        <Label className="text-lg text-gray-600 ">
          {title}
        </Label>
        <Input 
          ref={ref}
          placeholder={placeholder} 
          type={type}
          className={error ? "border-red-500" : ""}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);
    