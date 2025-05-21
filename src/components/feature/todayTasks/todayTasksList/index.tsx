import { TodayTaskItem } from '../todayTaskitem';
import { cn } from '@/lib/utils';
export function TodayTasksList({ className }: { className?: string }) {
  return (
    <ul className={cn('flex flex-col gap-2 pl-4', className)}>
      <TodayTaskItem>Task 1</TodayTaskItem>
      <TodayTaskItem>Task 2</TodayTaskItem>
      <TodayTaskItem>Task 3</TodayTaskItem>
    </ul>
  );
}
