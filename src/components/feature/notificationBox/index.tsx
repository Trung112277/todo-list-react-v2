import { Notification } from './notification';
import { ButtonAddTask } from '../buttonAddTask';
export function NotificationBox() {
  return (
    <div className="flex items-center gap-5">
      <Notification />
      <ButtonAddTask />
    </div>
  );
}
