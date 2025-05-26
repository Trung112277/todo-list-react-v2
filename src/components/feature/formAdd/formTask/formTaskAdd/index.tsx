import { useAddTaskForm } from '@/hooks/useAddTaskForm';
import { TaskForm } from '../formTaskContent';
import { TaskFormProvider } from '@/contexts/taskForm/context';

export function FormTaskAdd() {
  const formProps = useAddTaskForm({ taskId: undefined });
  return (
    <TaskFormProvider {...formProps}>
      <TaskForm />
    </TaskFormProvider>
  );
}
