import { TaskItemDeleteProvider } from '@/contexts/taskItemDelete/context';
import { TaskItemDeleteContent } from './taskItemDeleteContent';

export function TaskItemDelete() {
  return (
    <TaskItemDeleteProvider>
      <TaskItemDeleteContent />
    </TaskItemDeleteProvider>
  );
}
