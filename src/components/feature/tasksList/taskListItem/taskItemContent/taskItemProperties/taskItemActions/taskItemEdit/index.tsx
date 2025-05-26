import { TaskItemEditProvider } from '@/contexts/taskItemEdit/context';
import { TaskItemEditContent } from './taskItemEditContent';

export function TaskItemEdit() {
  return (
    <TaskItemEditProvider>
      <TaskItemEditContent />
    </TaskItemEditProvider>
  );
}
