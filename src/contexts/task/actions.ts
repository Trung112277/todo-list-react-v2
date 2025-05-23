import { Task } from '@/types/task';
import { useError } from '../error/context';
import { useLoading } from '../loading/context';

export const useTaskActions = (dispatch: React.Dispatch<any>) => {
  const { setError } = useError();
  const { setIsLoading } = useLoading();

  const addTask = async (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      setIsLoading(true);
      dispatch({ type: 'ADD_TASK', payload: task });
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
      dispatch({ type: 'UPDATE_TASK', payload: { id, updates } });
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
      setError('Failed to toggle task important status');
      console.error('Error toggling task important status:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    addTask,
    updateTask,
    deleteTask,
    toggleTaskStatus,
    toggleTaskImportant,
  };
}; 