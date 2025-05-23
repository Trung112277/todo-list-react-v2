import { useMemo } from 'react';
import { useTask } from '@/contexts/task';
import { Task } from '@/types/task';

export function useTaskById(taskId: string): Task | undefined {
  const { tasks } = useTask();

  return useMemo(() => {
    return tasks.find(task => task.id === taskId);
  }, [tasks, taskId]);
} 