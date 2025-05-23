import { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';
import { Task, TaskContextType } from '@/types/task';
import { taskReducer, TaskAction } from './reducer';

const STORAGE_KEY = 'tasks';

const TaskContext = createContext<TaskContextType | undefined>(undefined);

const getInitialState = (): Task[] => {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, dispatch] = useReducer(taskReducer, getInitialState());

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => {
    dispatch({ type: 'ADD_TASK', payload: task });
  };

  const updateTask = (id: string, updates: Partial<Task>) => {
    dispatch({ type: 'UPDATE_TASK', payload: { id, updates } });
  };

  const deleteTask = (id: string) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  const toggleTaskStatus = (id: string) => {
    dispatch({ type: 'TOGGLE_TASK_STATUS', payload: id });
  };

  const toggleTaskImportant = (id: string) => {
    dispatch({ type: 'TOGGLE_TASK_IMPORTANT', payload: id });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        updateTask,
        deleteTask,
        toggleTaskStatus,
        toggleTaskImportant,
      }}
    >
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