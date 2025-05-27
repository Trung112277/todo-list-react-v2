import { Dispatch } from 'react';
import { DirectoryAction } from './reducer';
import { Directory } from '@/types/directory';
import { createDirectory } from './helpers';

export function useDirectoryActions(
  dispatch: Dispatch<DirectoryAction>,
  taskDispatch?: Dispatch<any>
) {
  const addDirectory = (name: string): Directory => {
    console.log('=== Creating new directory ===');
    const newDir = createDirectory(name);
    console.log('New directory created:', newDir);
    dispatch({ type: 'ADD_DIRECTORY', payload: newDir });
    console.log('Directory added to state');
    return newDir;
  };

  const editDirectory = (id: string, name: string) => {
    dispatch({ type: 'EDIT_DIRECTORY', payload: { id, name } });
  };

  const deleteDirectory = (id: string) => {
    // First move all tasks to main directory if taskDispatch is available
    if (taskDispatch) {
      taskDispatch({ type: 'MOVE_TASKS_TO_MAIN', payload: id });
    }
    // Then delete the directory
    dispatch({ type: 'DELETE_DIRECTORY', payload: id });
  };

  return {
    addDirectory,
    editDirectory,
    deleteDirectory,
  };
} 