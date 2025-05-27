import { createContext, useContext, useReducer, ReactNode, useEffect, useMemo } from 'react';
import type { Directory } from '@/types/directory';
import type { DirectoryAction } from './reducer';
import { directoryReducer } from './reducer';
import { getInitialState, saveDirectoriesToStorage } from './helpers';
import { useDirectoryActions } from './actions';
import { Dispatch } from 'react';

export interface DirectoryContextType {
  directories: Directory[];
  directoriesMap: Map<string, Directory>;
  addDirectory: (name: string) => Directory;
  editDirectory: (id: string, name: string) => void;
  deleteDirectory: (id: string) => void;
}

const DirectoryContext = createContext<DirectoryContextType | undefined>(undefined);

interface DirectoryProviderProps {
  children: ReactNode;
  taskDispatch?: Dispatch<any>;
}

export function DirectoryProvider({ children, taskDispatch }: DirectoryProviderProps) {
  const [directories, dispatch] = useReducer(directoryReducer, getInitialState());
  const actions = useDirectoryActions(dispatch, taskDispatch);

  // Create a Map for O(1) directory lookup
  const directoriesMap = useMemo(() => {
    console.log('Creating directoriesMap with:', directories);
    const map = new Map<string, Directory>();
    directories.forEach((dir: Directory) => {
      console.log('Adding directory to map:', dir);
      map.set(dir.id, dir);
    });
    return map;
  }, [directories]);

  useEffect(() => {
    console.log('Saving directories to storage:', directories);
    try {
      saveDirectoriesToStorage(directories);
    } catch (error) {
      console.error('Error saving directories to localStorage:', error);
    }
  }, [directories]);

  const value = useMemo(() => ({
    directories,
    directoriesMap,
    ...actions,
  }), [directories, directoriesMap, actions]);

  return (
    <DirectoryContext.Provider value={value}>
      {children}
    </DirectoryContext.Provider>
  );
}

export function useDirectory() {
  const context = useContext(DirectoryContext);
  if (context === undefined) {
    throw new Error('useDirectory must be used within a DirectoryProvider');
  }
  return context;
}
