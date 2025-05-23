import { ButtonAddTaskList } from '@/components/feature/button/buttonAddTaskList';
import { useTask } from '@/contexts/task';
import { TaskItem } from './taskItem';

interface TaskCellProps {
  columnIndex: number;
  rowIndex: number;
  style: React.CSSProperties;
}

export function TaskCell({ columnIndex, rowIndex, style }: TaskCellProps) {
  const { tasks } = useTask();
  const index = rowIndex * 4 + columnIndex; // 4 columns
  const totalItems = tasks.length + 1; // +1 for ButtonAddTaskList

  if (index >= totalItems) {
    return null;
  }

  // If this is the last cell, render ButtonAddTaskList
  if (index === tasks.length) {
    return (
      <div style={style} className="p-2 sm:p-4 xl:p-6">
        <ButtonAddTaskList />
      </div>
    );
  }

  const task = tasks[index];
  return <TaskItem taskId={task.id} style={style} />;
} 