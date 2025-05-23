import { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';
import { Task, TaskContextType } from '@/types/task';
import { taskReducer, TaskAction } from './reducer';
import { useError } from '../error/context';

const STORAGE_KEY = 'tasks';

const TaskContext = createContext<TaskContextType | undefined>(undefined);

const getInitialState = (): Task[] => {
  try {
    if (typeof window === 'undefined') return [];
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error loading tasks from localStorage:', error);
    return [];
  }
};

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, dispatch] = useReducer(taskReducer, getInitialState());
  const { setError } = useError();

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
      setError('Failed to save tasks to localStorage');
      console.error('Error saving tasks to localStorage:', error);
    }
  }, [tasks, setError]);

  const addTask = (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      dispatch({ type: 'ADD_TASK', payload: task });
    } catch (error) {
      setError('Failed to add task');
      console.error('Error adding task:', error);
    }
  };

  const updateTask = (id: string, updates: Partial<Task>) => {
    try {
      dispatch({ type: 'UPDATE_TASK', payload: { id, updates } });
    } catch (error) {
      setError('Failed to update task');
      console.error('Error updating task:', error);
    }
  };

  const deleteTask = (id: string) => {
    try {
      dispatch({ type: 'DELETE_TASK', payload: id });
    } catch (error) {
      setError('Failed to delete task');
      console.error('Error deleting task:', error);
    }
  };

  const toggleTaskStatus = (id: string) => {
    try {
      dispatch({ type: 'TOGGLE_TASK_STATUS', payload: id });
    } catch (error) {
      setError('Failed to toggle task status');
      console.error('Error toggling task status:', error);
    }
  };

  const toggleTaskImportant = (id: string) => {
    try {
      dispatch({ type: 'TOGGLE_TASK_IMPORTANT', payload: id });
    } catch (error) {
      setError('Failed to toggle task important status');
      console.error('Error toggling task important status:', error);
    }
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