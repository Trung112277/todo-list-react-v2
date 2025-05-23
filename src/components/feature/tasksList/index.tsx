import { ButtonAddTaskList } from '@/components/feature/button/buttonAddTaskList';
import { TaskListItem } from '@/components/feature/tasksList/taskListItem';
import { useTask } from '@/contexts/task';
import { FixedSizeGrid as Grid } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

export function TasksList() {
  const { tasks } = useTask();

  const Cell = ({ columnIndex, rowIndex, style }: { columnIndex: number; rowIndex: number; style: React.CSSProperties }) => {
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
    return (
      <div style={style} className="p-2 sm:p-4 xl:p-6">
        <TaskListItem taskId={task.id} />
      </div>
    );
  };

  return (
    <div className="mt-5 mb-10 h-[calc(100vh-200px)]">
      <AutoSizer>
        {({ height, width }: { height: number; width: number }) => (
          <Grid
            className="grid gap-2 sm:gap-4 xl:gap-6 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 items-end"
            columnCount={4}
            columnWidth={width / 4}
            height={height}
            rowCount={Math.ceil((tasks.length + 1) / 4)} // +1 for ButtonAddTaskList
            rowHeight={200}
            width={width}
          >
            {Cell}
          </Grid>
        )}
      </AutoSizer>
    </div>
  );
}
