import { Task } from '@/types/task';

export const taskActions = {
  addTask: (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newTask: Task = {
      ...task,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    return newTask;
  },

  updateTask: (task: Task, updates: Partial<Task>) => ({
    ...task,
    ...updates,
    updatedAt: new Date(),
  }),

  toggleTaskStatus: (task: Task) => ({
    ...task,
    isCompleted: !task.isCompleted,
    updatedAt: new Date(),
  }),

  toggleTaskImportant: (task: Task) => ({
    ...task,
    isImportant: !task.isImportant,
    updatedAt: new Date(),
  }),
}; 