import { ButtonForm } from '../../buttonForm';
import { InputForm } from '../../inputForm';
import { DateInput } from '../../dateInput';
import { DescriptionTextarea } from '../../descriptionTextarea';
import { ImportantCheckbox } from '@/components/feature/formAdd/importantCheckbox';
import { SelectForm } from '../../selectDirectoryFom';
import { useTaskForm } from '@/contexts/taskForm/context';

export function TaskForm() {
  const {
    register,
    handleSubmit,
    errors,
    isImportant,
    handleImportantChange,
    onSubmit,
    taskId,
  } = useTaskForm();

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
      <ButtonForm>{taskId ? 'Edit Task' : 'Add Task'}</ButtonForm>
    </form>
  );
} 