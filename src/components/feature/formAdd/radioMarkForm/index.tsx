import { RadioGroupItem } from '@/components/ui/radio-group';
import { RadioGroup } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
export function RadioMarkForm() {
  return (
    <RadioGroup>
      <div className="flex items-center space-x-2 ">
        <RadioGroupItem value="important" id="important" />
        <Label htmlFor="important" className="text-gray-500 text-lg">Mark as important</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="completed" id="completed" />
        <Label htmlFor="completed" className="text-gray-500 text-lg">Mark as completed</Label>
      </div>
    </RadioGroup>
  );
}
