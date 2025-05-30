import { createContext, useContext, useReducer, ReactNode, useEffect, useMemo } from 'react';
import { Task, TaskContextType } from '@/types/task';
import { taskReducer } from './reducer';
import { getInitialState, saveTasksToStorage, STORAGE_KEY } from './helpers';
import { useTaskActions } from './actions';

const TaskContext = createContext<TaskContextType | undefined>(undefined);

interface TaskProviderProps {
  children: ReactNode;
  setError: (message: string) => void;
}

export function TaskProvider({ children, setError }: TaskProviderProps) {
  const [tasks, dispatch] = useReducer(taskReducer, getInitialState());
  const actions = useTaskActions(dispatch, setError);

  // Create a Map for O(1) task lookup
  const tasksMap = useMemo(() => {
    const map = new Map<string, Task>();
    tasks.forEach(task => map.set(task.id, task));
    return map;
  }, [tasks]);

  // Save tasks to localStorage when they change
  useEffect(() => {
    try {
      saveTasksToStorage(tasks);
    } catch (error) {
      setError('Failed to save tasks to localStorage');
      console.error('Error saving tasks to localStorage:', error);
    }
  }, [tasks, setError]);

  const getTasksByStatus = (status: Task['status']) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    switch (status) {
      case 'today':
        return tasks.filter(task => {
          const taskDate = new Date(task.dueDate);
          taskDate.setHours(0, 0, 0, 0);
          return taskDate.getTime() === today.getTime();
        });
      case 'important':
        return tasks.filter(task => task.isImportant);
      case 'completed':
        return tasks.filter(task => task.isCompleted);
      case 'uncompleted':
        return tasks.filter(task => !task.isCompleted);
      case 'all':
      default:
        return tasks;
    }
  };

  const value = useMemo(() => ({
    tasks,
    tasksMap,
    dispatch,
    ...actions,
    getTasksByStatus,
  }), [tasks, tasksMap, actions, dispatch]);

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTask() {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error('useTask must be used within a TaskProvider');
  }
  return context;
} 