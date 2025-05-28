import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { forwardRef } from 'react';

interface DescriptionTextareaProps {
  title: string;
  error?: string;
}

export const DescriptionTextarea = forwardRef<HTMLTextAreaElement, DescriptionTextareaProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ title, error, ...props }, ref) => {
    return (
      <div className="space-y-2">
        <Label className="text-lg text-gray-600">
          {title}
        </Label>
        <Textarea 
          ref={ref}
          className={error ? "border-red-500" : ""}
          placeholder='e.g, study for the test'
          {...props}
        />
        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);
