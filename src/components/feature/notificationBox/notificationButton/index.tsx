import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NotificationButtonProps {
  hasTodayTasks: boolean;
}

export function NotificationButton({ hasTodayTasks }: NotificationButtonProps) {
  return (
    <Button variant="ghost" size="icon" className="relative hover:bg-transparent text-primary hover:text-blue-500">
      <Bell style={{width: "25px", height: "25px"}}/>
      {hasTodayTasks && (
        <span className="absolute h-2 w-2 top-0 right-0 rounded-full bg-red-500" />
      )}
    </Button>
  );
}
