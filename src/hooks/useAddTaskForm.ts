import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { taskFormSchema, type TaskFormData } from '@/schemas/taskSchema';
import { useTaskActions } from '@/contexts/task/actions';
import { useTask } from '@/contexts/task/context';
import { useDirectory } from '@/contexts/directory/context';
import { useTaskDialog } from '@/hooks/useTaskDialog';
import React from 'react';
import { toSlug } from '@/utils/string';

function getTodayString() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

interface UseAddTaskFormProps {
  taskId?: string;
}

export function useAddTaskForm({ taskId }: UseAddTaskFormProps) {
  const { dispatch, tasksMap } = useTask();
  const { addTask, updateTask } = useTaskActions(dispatch);
  const { directoriesMap } = useDirectory();
  const { closeDialog } = useTaskDialog();
  const task = taskId ? tasksMap.get(taskId) : undefined;

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
      directoryId: task?.directoryId || 'main'
    }
  });

  // Set initial directoryId value
  React.useEffect(() => {
    if (task?.directoryId) {
      setValue('directoryId', task.directoryId);
    }
  }, [task?.directoryId, setValue]);

  const isImportant = watch('isImportant');

  const handleImportantChange = (checked: boolean) => {
    setValue('isImportant', checked, { shouldValidate: true });
  };

  const onSubmit = async (data: TaskFormData) => {
    try {
      if (taskId && task) {
        // Update existing task
        await updateTask(taskId, data);
      } else {
        // Add new task
        await addTask(data);
      }
      closeDialog();
      reset();
    } catch (error) {
      console.error('Error submitting task:', error);
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
    directories: Object.values(directoriesMap)
  };
} 