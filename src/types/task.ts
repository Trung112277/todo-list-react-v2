export interface Task {
  id: string;
  title: string;
  description?: string;
  isCompleted: boolean;
  isImportant: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface TaskContextType {
  tasks: Task[];
  tasksMap: Map<string, Task>;
  addTask: (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateTask: (id: string, task: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  toggleTaskStatus: (id: string) => void;
  toggleTaskImportant: (id: string) => void;
} 