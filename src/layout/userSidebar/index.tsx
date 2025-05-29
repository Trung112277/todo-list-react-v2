import { HeaderUserSidebar } from '@/layout/headerUserSidebar';
import { ProgressTask } from '@/components/feature/progressTask';
import { SwitchMode } from '@/components/feature/switchMode';
import { TodayTasks } from '@/components/feature/todayTasks';
import { BottomUserSidebar } from '@/layout/bottomUserSidebar';
import { ButtonDeleteAllTasks } from '@/components/feature/button/buttonDeleteAllTasks';
import { useSidebar } from '@/contexts/sidebar/context';
import { cn } from '@/lib/utils';

export function UserSidebar() {
  const { isUserSidebarOpen } = useSidebar();

  return (
    <aside className={cn(
      "bg-slate-100 h-screen w-60 xl:w-2/12 fixed dark:bg-slate-800 z-20 top-0 right-0 transition-transform duration-300",
      isUserSidebarOpen ? "translate-x-0" : "translate-x-full xl:translate-x-0"
    )}>
      <div className="p-5 flex flex-col h-full max-h-full overflow-y-auto">
        <HeaderUserSidebar />
        <SwitchMode />
        <hr className="mb-5 border-t-2 border-gray-300" />
        <ProgressTask />
        <hr className="my-5 border-t-2 border-gray-300" />
        <TodayTasks />
        <hr className="my-5 border-t-2 border-gray-300" />
        <ButtonDeleteAllTasks />
        <BottomUserSidebar />
      </div>
    </aside>
  );
}
