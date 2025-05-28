import { createContext, useContext, useMemo, ReactNode } from 'react';
import { useTask } from '@/contexts/task';

interface ProgressContextType {
  allTasksProgress: {
    completed: number;
    total: number;
    percentage: number;
  };
  todayTasksProgress: {
    completed: number;
    total: number;
    percentage: number;
  };
  hasTodayTasks: boolean;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

interface ProgressProviderProps {
  children: ReactNode;
}

export function ProgressProvider({ children }: ProgressProviderProps) {
  const { tasks } = useTask();

  const progress = useMemo(() => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    // Calculate all tasks progress
    const allTasksCompleted = tasks.filter(task => task.isCompleted).length;
    const allTasksTotal = tasks.length;

    // Calculate today's tasks progress
    const todayTasks = tasks.filter(task => {
      const taskDate = new Date(task.dueDate);
      return taskDate >= today && taskDate < tomorrow;
    });
    const todayTasksCompleted = todayTasks.filter(task => task.isCompleted).length;
    const todayTasksTotal = todayTasks.length;

    return {
      allTasksProgress: {
        completed: allTasksCompleted,
        total: allTasksTotal,
        percentage: allTasksTotal ? (allTasksCompleted / allTasksTotal) * 100 : 0,
      },
      todayTasksProgress: {
        completed: todayTasksCompleted,
        total: todayTasksTotal,
        percentage: todayTasksTotal ? (todayTasksCompleted / todayTasksTotal) * 100 : 0,
      },
      hasTodayTasks: todayTasksTotal > 0,
    };
  }, [tasks]);

  return (
    <ProgressContext.Provider value={progress}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
} 