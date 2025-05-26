import { Directory } from '@/types/directory';
import { v4 as uuidv4 } from 'uuid';

export const STORAGE_KEY = 'directories';

const DEFAULT_DIRECTORY: Directory = {
  id: 'main',
  name: 'Main',
  path: '/directory/main'
};

export const getInitialState = (): Directory[] => {
  try {
    if (typeof window === 'undefined') return [DEFAULT_DIRECTORY];
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [DEFAULT_DIRECTORY];
  } catch (error) {
    console.error('Error loading directories from localStorage:', error);
    return [DEFAULT_DIRECTORY];
  }
};

export const saveDirectoriesToStorage = (directories: Directory[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(directories));
  } catch (error) {
    console.error('Error saving directories to localStorage:', error);
    throw error;
  }
};

export const createDirectory = (name: string): Directory => {
  const id = name.toLowerCase().replace(/\s+/g, '-');
  return {
    id,
    name,
    path: `/directory/${id}`
  };
}; 