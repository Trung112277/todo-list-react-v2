import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { NotificationButton } from '../notificationButton';
import { NotificationContent } from '../notificationContent';

export function Notification() {
  return (
    <Popover>
      <PopoverTrigger>
        <NotificationButton />
      </PopoverTrigger>
      <PopoverContent>
        <NotificationContent />
      </PopoverContent>
    </Popover>
  );
}
