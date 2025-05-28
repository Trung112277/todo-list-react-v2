import { Task } from '@/types/task';

export type SortOption = 'order-added' | 'erlier' | 'later' | 'completed' | 'uncompleted';

type SortFunction = (a: Task, b: Task) => number;

export const sortFunctions: Record<SortOption, SortFunction> = {
  'order-added': (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
  'erlier': (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime(),
  'later': (a, b) => new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime(),
  'completed': (a, b) => a.isCompleted === b.isCompleted ? 0 : a.isCompleted ? -1 : 1,
  'uncompleted': (a, b) => a.isCompleted === b.isCompleted ? 0 : a.isCompleted ? 1 : -1,
};

export const sortOptions = [
  { value: 'order-added' as const, label: 'Order added' },
  { value: 'erlier' as const, label: 'Earlier first' },
  { value: 'later' as const, label: 'Later first' },
  { value: 'completed' as const, label: 'Completed first' },
  { value: 'uncompleted' as const, label: 'Uncompleted first' },
]; 