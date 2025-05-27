import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { NotificationButton } from '../notificationButton';
import { NotificationContent } from '../notificationContent';
import { Task } from '@/types/task';

interface NotificationProps {
  hasTodayTasks: boolean;
  tasks: Task[];
}

export function Notification({ hasTodayTasks, tasks }: NotificationProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div>
          <NotificationButton hasTodayTasks={hasTodayTasks} />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <div>
          <h4 className="font-medium mb-2 text-xl">
            Today's Tasks {hasTodayTasks && `(${tasks.length})`}
          </h4>
          <div className="max-h-[300px] overflow-y-auto">
            <NotificationContent tasks={tasks} />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
