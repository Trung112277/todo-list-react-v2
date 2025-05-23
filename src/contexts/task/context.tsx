import { createContext, useContext, useReducer, ReactNode, useEffect, useMemo } from 'react';
import { Task, TaskContextType } from '@/types/task';
import { taskReducer } from './reducer';
import { useError } from '../error/context';
import { getInitialState, saveTasksToStorage } from './helpers';
import { useTaskActions } from './actions';

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, dispatch] = useReducer(taskReducer, getInitialState());
  const { setError } = useError();
  const actions = useTaskActions(dispatch);

  // Create a Map for O(1) task lookup
  const tasksMap = useMemo(() => {
    const map = new Map<string, Task>();
    tasks.forEach(task => map.set(task.id, task));
    return map;
  }, [tasks]);

  useEffect(() => {
    try {
      saveTasksToStorage(tasks);
    } catch (error) {
      setError('Failed to save tasks to localStorage');
      console.error('Error saving tasks to localStorage:', error);
    }
  }, [tasks, setError]);

  const value = useMemo(() => ({
    tasks,
    tasksMap,
    ...actions,
  }), [tasks, tasksMap, actions]);

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