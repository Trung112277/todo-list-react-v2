export interface Task {
  id: string;
  title: string;
  description?: string;
  dueDate: string;
  isCompleted: boolean;
  isImportant: boolean;
  status: 'today' | 'all' | 'important' | 'completed' | 'uncompleted';
  createdAt: Date;
  updatedAt: Date;
  directoryId: string;
}

export interface TaskContextType {
  tasks: Task[];
  tasksMap: Map<string, Task>;
  addTask: (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateTask: (id: string, task: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  deleteAllTasks: () => void;
  toggleTaskStatus: (id: string) => void;
  toggleTaskImportant: (id: string) => void;
  getTasksByStatus: (status: Task['status']) => Task[];
  dispatch: React.Dispatch<any>;
} 