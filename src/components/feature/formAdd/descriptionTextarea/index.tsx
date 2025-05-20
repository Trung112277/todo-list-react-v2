import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
export function DescriptionTextarea({ title }: { title: string }) {
  return (
    <div>
      <Label className="flex flex-col gap-2 text-lg text-gray-600">
        {title}
        <Textarea placeholder="e.g, study for the test" />
      </Label>
    </div>
  );
}
