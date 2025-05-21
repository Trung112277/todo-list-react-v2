import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export function SwitchMode() {
  return (
    <div className="flex items-center justify-between my-5">
      <Label htmlFor="dark-mode" className="w-full cursor-pointer text-md">
        Dark Mode
      </Label>
      <Switch id="dark-mode" />
    </div>
  );
}
