import { FixedSizeGrid as Grid } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { TaskCell } from '../taskCell';

interface TaskGridProps {
  tasksCount: number;
}

export function TaskGrid({ tasksCount }: TaskGridProps) {
  return (
    <div className="mt-5 mb-10 h-[calc(100vh-200px)]">
      <AutoSizer>
        {({ height, width }: { height: number; width: number }) => (
          <Grid
            className="grid gap-2 sm:gap-4 xl:gap-6 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 items-end"
            columnCount={4}
            columnWidth={width / 4}
            height={height}
            rowCount={Math.ceil((tasksCount + 1) / 4)}
            rowHeight={200}
            width={width}
          >
            {TaskCell}
          </Grid>
        )}
      </AutoSizer>
    </div>
  );
} 