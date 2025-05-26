import { createContext, useContext, ReactNode, useState } from 'react';
import { useTask } from '@/contexts/task';
import { useTaskItemId } from '@/contexts/taskItem/context';
import { Task } from '@/types/task';

interface TaskItemEditContextType {
  taskId: string;
  task: Task | null;
  isOpen: boolean;
  openDialog: () => void;
  closeDialog: () => void;
}

const TaskItemEditContext = createContext<TaskItemEditContextType | undefined>(undefined);

export function TaskItemEditProvider({ children }: { children: ReactNode }) {
  const taskId = useTaskItemId();
  const { tasksMap } = useTask();
  const task = taskId ? tasksMap.get(taskId) ?? null : null;
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <TaskItemEditContext.Provider value={{ taskId, task, isOpen, openDialog, closeDialog }}>
      {children}
    </TaskItemEditContext.Provider>
  );
}

export function useTaskItemEdit() {
  const context = useContext(TaskItemEditContext);
  if (context === undefined) {
    throw new Error('useTaskItemEdit must be used within a TaskItemEditProvider');
  }
  return context;
} 