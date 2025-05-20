import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function DateInput({ title }: { title: string }) {
  return (
    <div>
      <Label className="flex flex-col gap-2 text-lg text-gray-600">
        {title}
        <Input type="date" title={title} className='block' />
      </Label>
    </div>
  );
}
