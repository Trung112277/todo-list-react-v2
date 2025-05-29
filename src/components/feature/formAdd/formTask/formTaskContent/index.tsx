import { ButtonForm } from '../../buttonForm';
import { InputForm } from '../../inputForm';
import { DateInput } from '../../dateInput';
import { DescriptionTextarea } from '../../descriptionTextarea';
import { ImportantCheckbox } from '@/components/feature/formAdd/importantCheckbox';
import { SelectForm } from '../../selectDirectoryFom';
import { useTaskForm } from '@/contexts/taskForm/context';
import { FORM_LABELS, FORM_PLACEHOLDERS, FORM_TITLES } from '@/constants/form';
import { TASK_FORM_STYLES } from '@/constants/taskFormStyle';

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
    <form onSubmit={handleSubmit(onSubmit)} className={TASK_FORM_STYLES.CONTAINER}>
      <InputForm
        title={FORM_LABELS.TITLE}
        placeholder={FORM_PLACEHOLDERS.TITLE}
        type="text"
        error={errors.title?.message}
        {...register('title')}
      />
      <DateInput 
        title={FORM_LABELS.DATE}
        error={errors.dueDate?.message}
        {...register('dueDate')}
      />
      <DescriptionTextarea 
        title={FORM_LABELS.DESCRIPTION}
        error={errors.description?.message}
        {...register('description')}
      />
      <SelectForm 
        title={FORM_LABELS.DIRECTORY} 
        register={register}
        error={errors.directoryId?.message}
      />
      <ImportantCheckbox 
        value={isImportant}
        onChange={handleImportantChange}
        error={errors.isImportant?.message}
      />
      <ButtonForm className='dark:text-slate-200'>
        {taskId ? FORM_TITLES.EDIT_TASK : FORM_TITLES.ADD_TASK}
      </ButtonForm>
    </form>
  );
} 