import { Notification } from './notification';
import { ButtonAddTask } from '@/components/feature/button/buttonAddTask';
export function NotificationBox() {
  return (
    <div className="flex items-center gap-5">
      <Notification />
      <ButtonAddTask />
    </div>
  );
}
