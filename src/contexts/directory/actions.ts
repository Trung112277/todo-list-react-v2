import { Dispatch } from 'react';
import { DirectoryAction } from './reducer';
import { Directory } from '@/types/directory';
import { createDirectory } from './helpers';

export function useDirectoryActions(dispatch: Dispatch<DirectoryAction>) {
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
    dispatch({ type: 'DELETE_DIRECTORY', payload: id });
  };

  return {
    addDirectory,
    editDirectory,
    deleteDirectory,
  };
} 