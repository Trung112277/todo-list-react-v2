import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface InputFormProps {
  title: string;
  placeholder: string;
  type: string;
}

export function InputForm({ title, placeholder, type }: InputFormProps) {
  return (
    <div>
    <Label className='flex flex-col gap-2 text-lg text-gray-600'>
      {title}
      <Input placeholder={placeholder} type={type}/>
    </Label>
    </div>
  );
}
    