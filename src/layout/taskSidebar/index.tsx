import { HeadingTitle } from '@/components/common/title/headingTitle';
import { Header } from '../header';
import { ButtonAddTask } from '@/components/feature/buttonAddTask';
import TaskStatusNav from '@/components/feature/taskStatusNav';
import { taskStatuses } from '@/constants/taskStatuses';
import Directories from '@/components/feature/directories';
import { HeaderTaskSidebar } from '@/layout/headerTaskSidebar';
export function TaskSidebar() {
  return (
    <aside className="bg-slate-100 h-screen w-60 xl:w-2/12 fixed dark:bg-slate-800 z-20 left-0 block">
      <HeaderTaskSidebar />
      <div className="my-8 mx-4">
        <ButtonAddTask />
      </div>
      <TaskStatusNav statuses={taskStatuses} />
      <Directories />
    </aside>
  );
}
