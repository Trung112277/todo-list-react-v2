import { useCallback, useState, useEffect, useRef } from 'react';
import { useTask } from '@/contexts/task';
import { SortOption, sortFunctions } from '../types/sortTask';

export function useSortTasks() {
  const { tasks, dispatch } = useTask();
  const [currentSort, setCurrentSort] = useState<SortOption>('order-added');
  const prevTasksRef = useRef(tasks);

  const sortTasks = useCallback((value: SortOption) => {
    const sortedTasks = [...tasks].sort(sortFunctions[value]);
    dispatch({ type: 'SORT_TASKS', payload: sortedTasks });
  }, [tasks, dispatch]);

  const handleSort = useCallback((value: SortOption) => {
    setCurrentSort(value);
    sortTasks(value);
  }, [sortTasks]);

  useEffect(() => {
    const prevTasks = prevTasksRef.current;
    const hasRelevantChanges = tasks.some((task, index) => {
      const prevTask = prevTasks[index];
      if (!prevTask) return true;
      
      return (
        task.dueDate !== prevTask.dueDate ||
        task.isCompleted !== prevTask.isCompleted ||
        task.createdAt !== prevTask.createdAt
      );
    });

    if (hasRelevantChanges) {
      sortTasks(currentSort);
    }

    prevTasksRef.current = tasks;
  }, [tasks, currentSort, sortTasks]);

  return {
    currentSort,
    handleSort,
  };
} 