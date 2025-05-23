import { createContext, useContext } from 'react';

const TaskItemIdContext = createContext<string | undefined>(undefined);

export const TaskItemIdProvider = ({
  taskId,
  children,
}: {
  taskId: string;
  children: React.ReactNode;
}) => (
  <TaskItemIdContext.Provider value={taskId}>
    {children}
  </TaskItemIdContext.Provider>
);

export function useTaskItemId() {
  const context = useContext(TaskItemIdContext);
  if (!context) throw new Error('useTaskItemId must be used within a TaskItemIdProvider');
  return context;
} 