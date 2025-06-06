import { Task } from '@/types/task';
import { taskActions } from './actionCreators';

export type TaskAction =
  | { type: 'ADD_TASK'; payload: Omit<Task, 'id' | 'createdAt' | 'updatedAt'> }
  | { type: 'UPDATE_TASK'; payload: { id: string; updates: Partial<Task> } }
  | { type: 'DELETE_TASK'; payload: string }
  | { type: 'DELETE_ALL_TASKS' }
  | { type: 'TOGGLE_TASK_STATUS'; payload: string }
  | { type: 'TOGGLE_TASK_IMPORTANT'; payload: string }
  | { type: 'MOVE_TASKS_TO_MAIN'; payload: string }
  | { type: 'SORT_TASKS'; payload: Task[] };

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

    case 'DELETE_ALL_TASKS':
      return [];

    case 'TOGGLE_TASK_STATUS':
      return state.map((task) =>
        task.id === action.payload ? taskActions.toggleTaskStatus(task) : task
      );

    case 'TOGGLE_TASK_IMPORTANT':
      return state.map((task) =>
        task.id === action.payload ? taskActions.toggleTaskImportant(task) : task
      );

    case 'MOVE_TASKS_TO_MAIN':
      return state.map((task) =>
        task.directoryId === action.payload
          ? { ...task, directoryId: 'main', updatedAt: new Date() }
          : task
      );

    case 'SORT_TASKS':
      return action.payload;

    default:
      return state;
  }
} 