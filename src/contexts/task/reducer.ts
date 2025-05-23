import { Task } from '@/types/task';
import { taskActions } from './actionCreators';

export type TaskAction =
  | { type: 'ADD_TASK'; payload: Omit<Task, 'id' | 'createdAt' | 'updatedAt'> }
  | { type: 'UPDATE_TASK'; payload: { id: string; updates: Partial<Task> } }
  | { type: 'DELETE_TASK'; payload: string }
  | { type: 'TOGGLE_TASK_STATUS'; payload: string }
  | { type: 'TOGGLE_TASK_IMPORTANT'; payload: string };

export function taskReducer(state: Task[], action: TaskAction): Task[] {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, taskActions.addTask(action.payload)];

    case 'UPDATE_TASK': {
      const { id, updates } = action.payload;
      return state.map((task) =>
        task.id === id ? taskActions.updateTask(task, updates) : task
      );
    }

    case 'DELETE_TASK':
      return state.filter((task) => task.id !== action.payload);

    case 'TOGGLE_TASK_STATUS':
      return state.map((task) =>
        task.id === action.payload ? taskActions.toggleTaskStatus(task) : task
      );

    case 'TOGGLE_TASK_IMPORTANT':
      return state.map((task) =>
        task.id === action.payload ? taskActions.toggleTaskImportant(task) : task
      );

    default:
      return state;
  }
} 