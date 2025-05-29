import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useTheme } from '@/contexts/theme/context';

export function SwitchMode() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center justify-between my-5">
      <Label htmlFor="dark-mode" className="w-full cursor-pointer text-md">
        Dark Mode
      </Label>
      <Switch 
        id="dark-mode" 
        checked={theme === 'dark'}
        onCheckedChange={toggleTheme}
      />
    </div>
  );
}
