import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { taskFormSchema, type TaskFormData } from '@/schemas/taskSchema';
import { ButtonForm } from '../buttonForm';
import { InputForm } from '../inputForm';
import { DateInput } from '../dateInput';
import { DescriptionTextarea } from '../descriptionTextarea';
import { ImportantCheckbox } from '../importantCheckbox';
import { SelectForm } from '../selectDirectoryFom';
import { useTask } from '@/contexts/task';
import { useLoading } from '@/contexts/loading/context';
import { useTaskDialog } from '@/hooks/useTaskDialog';

function getTodayString() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

interface FormTaskProps {
  name: string;
}

export function FormTask({ name }: FormTaskProps) {
  const { addTask } = useTask();
  const { setIsLoading } = useLoading();
  const { closeDialog } = useTaskDialog();

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
      isImportant: false,
      isCompleted: false,
      dueDate: getTodayString(),
    },
  });

  const isImportant = watch('isImportant');

  const handleImportantChange = (checked: boolean) => {
    setValue('isImportant', checked, { shouldValidate: true });
  };

  const onSubmit = async (data: TaskFormData) => {
    setIsLoading(true);
    try {
      await addTask(data);
      closeDialog();
      reset();
    } catch (error) {
      console.error('Error adding task:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <InputForm
        title="Title"
        placeholder="e.g, study for the test"
        type="text"
        error={errors.title?.message}
        {...register('title')}
      />
      <DateInput 
        title="Date" 
        error={errors.dueDate?.message}
        {...register('dueDate')}
      />
      <DescriptionTextarea 
        title="Description (optional)" 
        error={errors.description?.message}
        {...register('description')}
      />
      <SelectForm title="Select a directory" />
      <ImportantCheckbox 
        value={isImportant}
        onChange={handleImportantChange}
        error={errors.isImportant?.message}
      />
      <ButtonForm>{name}</ButtonForm>
    </form>
  );
}
