import { useState } from 'react';
import { useTask } from '@/contexts/task';
import { useLoading } from '@/contexts/loading/context';
import { useTaskDialog } from './useTaskDialog';

interface TaskFormData {
  title: string;
  description: string;
  dueDate: string;
  isImportant: boolean;
}

export function useTaskForm() {
  const [formData, setFormData] = useState<TaskFormData>({
    title: '',
    description: '',
    dueDate: '',
    isImportant: false,
  });
  const { addTask } = useTask();
  const { setIsLoading } = useLoading();
  const { closeDialog } = useTaskDialog();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await addTask({
        ...formData,
        isCompleted: false,
      });
      closeDialog();
      setFormData({
        title: '',
        description: '',
        dueDate: '',
        isImportant: false,
      });
    } catch (error) {
      console.error('Error adding task:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
} 