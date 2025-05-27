import { Task } from '@/types/task';
import { format, parseISO } from 'date-fns';
import { Calendar, Clock } from 'lucide-react';

interface NotificationContentProps {
  tasks: Task[];
}

export function NotificationContent({ tasks }: NotificationContentProps) {
  if (tasks.length === 0) {
    return <p className="text-md text-muted-foreground">No tasks for today</p>;
  }

  return (
    <div className="space-y-2">
      {tasks.map((task) => {
        const dueDate = parseISO(task.dueDate);
        return (
          <div
            key={task.id}
            className="flex items-start gap-3 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 border-b-2 border-slate-200 "
          >
            <div className="flex flex-col gap-2 w-full">
              <p className="text-md font-medium truncate">{task.title}</p>
              {task.description && (
                <p className="text-sm text-muted-foreground truncate">
                  {task.description}
                </p>
              )}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <time dateTime={task.dueDate}>
                    {format(dueDate, 'MMM d, yyyy')}
                  </time>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <time dateTime={task.dueDate}>
                    {format(dueDate, 'h:mm a')}
                  </time>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
