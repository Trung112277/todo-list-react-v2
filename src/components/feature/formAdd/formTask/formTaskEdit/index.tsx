import { useEditTaskForm } from '@/hooks/useEditTaskForm';
import { TaskForm } from '../formTaskContent';
import { TaskFormProvider } from '@/contexts/taskForm/context';

interface FormTaskEditProps {
  taskId: string;
}

export function FormTaskEdit({ taskId }: FormTaskEditProps) {
  const formProps = useEditTaskForm({ taskId });
  return (
    <TaskFormProvider {...formProps}>
      <TaskForm />
    </TaskFormProvider>
  );
}
