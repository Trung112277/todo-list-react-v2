import { createContext, useContext, ReactNode } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { TaskFormData } from '@/schemas/taskSchema';
import { ERROR_MESSAGES } from '@/constants/error';

interface TaskFormContextType {
  register: UseFormReturn<TaskFormData>['register'];
  handleSubmit: UseFormReturn<TaskFormData>['handleSubmit'];
  errors: UseFormReturn<TaskFormData>['formState']['errors'];
  isImportant: boolean;
  handleImportantChange: (checked: boolean) => void;
  onSubmit: (data: TaskFormData) => Promise<void>;
  taskId?: string;
}

const TaskFormContext = createContext<TaskFormContextType | undefined>(undefined);

interface TaskFormProviderProps extends TaskFormContextType {
  children: ReactNode;
}

export function TaskFormProvider({ children, ...value }: TaskFormProviderProps) {
  return (
    <TaskFormContext.Provider value={value}>
      {children}
    </TaskFormContext.Provider>
  );
}

export function useTaskForm() {
  const context = useContext(TaskFormContext);
  if (context === undefined) {
    throw new Error(ERROR_MESSAGES.CONTEXT.TASK_FORM);
  }
  return context;
} 