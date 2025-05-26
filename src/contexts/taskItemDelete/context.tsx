import { createContext, useContext, ReactNode } from 'react';
import { useTask } from '@/contexts/task';
import { useTaskItemId } from '@/contexts/taskItem/context';

interface TaskItemDeleteContextType {
  handleDelete: () => void;
}

const TaskItemDeleteContext = createContext<TaskItemDeleteContextType | null>(null);

export function TaskItemDeleteProvider({ children }: { children: ReactNode }) {
  const { deleteTask } = useTask();
  const taskId = useTaskItemId();

  const handleDelete = () => {
    deleteTask(taskId);
  };

  return (
    <TaskItemDeleteContext.Provider value={{ handleDelete }}>
      {children}
    </TaskItemDeleteContext.Provider>
  );
}

export function useTaskItemDelete() {
  const context = useContext(TaskItemDeleteContext);
  if (!context) {
    throw new Error('useTaskItemDelete must be used within a TaskItemDeleteProvider');
  }
  return context;
} 