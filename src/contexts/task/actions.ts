import { Task } from '@/types/task';
import { useLoading } from '../loading/context';

export const useTaskActions = (
  dispatch: React.Dispatch<any>,
  setError: (message: string) => void
) => {
  const { setIsLoading } = useLoading();

  const addTask = async (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      setIsLoading(true);
      // Get the current directory ID from the URL or use 'main' as default
      const currentDirectoryId = window.location.pathname.startsWith('/directory/')
        ? window.location.pathname.split('/')[2]
        : 'main';
      
      // Add directoryId to the task
      const taskWithDirectory = {
        ...task,
        directoryId: task.directoryId || currentDirectoryId
      };
      
      dispatch({ type: 'ADD_TASK', payload: taskWithDirectory });
    } catch (error) {
      setError('Failed to add task');
      console.error('Error adding task:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateTask = async (id: string, updates: Partial<Task>) => {
    try {
      setIsLoading(true);
      // Get the current directory ID from the URL or use 'main' as default
      const currentDirectoryId = window.location.pathname.startsWith('/directory/')
        ? window.location.pathname.split('/')[2]
        : 'main';
      
      // If directoryId is not provided in updates, use the current directory
      const updatesWithDirectory = {
        ...updates,
        directoryId: updates.directoryId ?? currentDirectoryId
      };
      
      dispatch({ type: 'UPDATE_TASK', payload: { id, updates: updatesWithDirectory } });
    } catch (error) {
      setError('Failed to update task');
      console.error('Error updating task:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteTask = async (id: string) => {
    try {
      setIsLoading(true);
      dispatch({ type: 'DELETE_TASK', payload: id });
    } catch (error) {
      setError('Failed to delete task');
      console.error('Error deleting task:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteAllTasks = async () => {
    try {
      setIsLoading(true);
      dispatch({ type: 'DELETE_ALL_TASKS' });
    } catch (error) {
      setError('Failed to delete all tasks');
      console.error('Error deleting all tasks:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleTaskStatus = async (id: string) => {
    try {
      setIsLoading(true);
      dispatch({ type: 'TOGGLE_TASK_STATUS', payload: id });
    } catch (error) {
      setError('Failed to toggle task status');
      console.error('Error toggling task status:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleTaskImportant = async (id: string) => {
    try {
      setIsLoading(true);
      dispatch({ type: 'TOGGLE_TASK_IMPORTANT', payload: id });
    } catch (error) {
      setError('Failed to toggle task important');
      console.error('Error toggling task important:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    addTask,
    updateTask,
    deleteTask,
    deleteAllTasks,
    toggleTaskStatus,
    toggleTaskImportant,
  };
}; 