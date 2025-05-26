import { Directory } from '@/types/directory';

export type DirectoryAction =
  | { type: 'ADD_DIRECTORY'; payload: Directory }
  | { type: 'EDIT_DIRECTORY'; payload: { id: string; name: string } }
  | { type: 'DELETE_DIRECTORY'; payload: string };

export function directoryReducer(state: Directory[], action: DirectoryAction): Directory[] {
  console.log('=== Directory Reducer ===');
  console.log('Current state:', state);
  console.log('Action:', action);

  let newState: Directory[];
  
  switch (action.type) {
    case 'ADD_DIRECTORY':
      newState = [...state, action.payload];
      break;
    
    case 'EDIT_DIRECTORY': {
      const { id, name } = action.payload;
      newState = state.map(dir => 
        dir.id === id 
          ? { ...dir, name, path: `/directory/${name.toLowerCase().replace(/\s+/g, '-')}` }
          : dir
      );
      break;
    }
    
    case 'DELETE_DIRECTORY':
      newState = state.filter(dir => dir.id !== action.payload);
      break;
    
    default:
      newState = state;
  }

  console.log('New state:', newState);
  console.log('========================');
  return newState;
} 