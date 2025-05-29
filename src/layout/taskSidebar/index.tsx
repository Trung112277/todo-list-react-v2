import { ButtonAddTask } from '@/components/feature/button/buttonAddTask';
import TaskStatusNav from '@/components/feature/taskStatusNav';
import { taskStatuses } from '@/constants/taskStatuses';
import Directories from '@/components/feature/directories';
import { HeaderTaskSidebar } from '@/layout/headerTaskSidebar';
import { useSidebar } from '@/contexts/sidebar/context';
import { cn } from '@/lib/utils';

export function TaskSidebar() {
  const { isTaskSidebarOpen } = useSidebar();

  return (
    <aside className={cn(
      "bg-slate-100 h-screen w-60 xl:w-2/12 fixed dark:bg-slate-800 z-20 left-0 transition-transform duration-300",
      isTaskSidebarOpen ? "translate-x-0" : "-translate-x-full xl:translate-x-0"
    )}>
      <div className="max-h-full overflow-y-auto">
        <HeaderTaskSidebar />
        <div className="my-8 mx-4">
          <ButtonAddTask />
        </div>
        <TaskStatusNav statuses={taskStatuses} />
        <Directories />
      </div>
    </aside>
  );
}
