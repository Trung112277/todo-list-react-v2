import { Task } from '@/types/task';

export const STORAGE_KEY = 'tasks';

export const getInitialState = (): Task[] => {
  try {
    if (typeof window === 'undefined') return [];
    const stored = localStorage.getItem(STORAGE_KEY);
    const tasks = stored ? JSON.parse(stored) : [];
    // Add directoryId to existing tasks
    return tasks.map((task: Task) => ({
      ...task,
      directoryId: task.directoryId || 'main'
    }));
  } catch (error) {
    console.error('Error loading tasks from localStorage:', error);
    return [];
  }
};

export const saveTasksToStorage = (tasks: Task[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error('Error saving tasks to localStorage:', error);
    throw error;
  }
}; 