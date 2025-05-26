import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { taskFormSchema, type TaskFormData } from '@/schemas/taskSchema';
import { useTask } from '@/contexts/task';
import { useLoading } from '@/contexts/loading/context';
import { useTaskItemEdit } from '@/contexts/taskItemEdit/context';

function getTodayString() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

interface UseEditTaskFormProps {
  taskId: string;
}

export function useEditTaskForm({ taskId }: UseEditTaskFormProps) {
  const { updateTask, tasksMap } = useTask();
  const { setIsLoading } = useLoading();
  const { closeDialog } = useTaskItemEdit();
  const task = tasksMap.get(taskId);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<TaskFormData>({
    resolver: zodResolver(taskFormSchema),
    defaultValues: {
      title: task?.title || '',
      description: task?.description || '',
      dueDate: task?.dueDate || getTodayString(),
      isImportant: task?.isImportant || false,
      isCompleted: task?.isCompleted || false,
      status: task?.status || 'all',
    },
  });

  const isImportant = watch('isImportant');

  const handleImportantChange = (checked: boolean) => {
    setValue('isImportant', checked, { shouldValidate: true });
  };

  const onSubmit = async (data: TaskFormData) => {
    setIsLoading(true);
    try {
      await updateTask(taskId, data);
      closeDialog();
      reset();
    } catch (error) {
      console.error('Error updating task:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    isImportant,
    handleImportantChange,
    onSubmit,
    taskId,
  };
} 