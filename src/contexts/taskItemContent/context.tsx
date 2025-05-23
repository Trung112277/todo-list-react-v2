import { createContext, useContext } from 'react';
import { Task } from '@/types/task';

interface TaskItemContentContextType {
  task: Task;
}

const TaskItemContentContext = createContext<TaskItemContentContextType | undefined>(undefined);

export const TaskItemContentProvider = ({
  task,
  children,
}: {
  task: Task;
  children: React.ReactNode;
}) => (
  <TaskItemContentContext.Provider value={{ task }}>
    {children}
  </TaskItemContentContext.Provider>
);

export function useTaskItemContent() {
  const context = useContext(TaskItemContentContext);
  if (!context) throw new Error('useTaskItemContent must be used within a TaskItemContentProvider');
  return context;
} 