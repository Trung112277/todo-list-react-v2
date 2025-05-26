import { FormTaskAdd } from './formTaskAdd';
import { FormTaskEdit } from './formTaskEdit';

interface FormTaskProps {
  taskId?: string;
}

export function FormTask({ taskId }: FormTaskProps) {
  return taskId ? <FormTaskEdit taskId={taskId} /> : <FormTaskAdd />;
}
