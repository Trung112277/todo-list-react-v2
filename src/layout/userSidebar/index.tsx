import { HeaderUserSidebar } from '@/layout/headerUserSidebar';
import { ProgressTask } from '@/components/feature/progressTask';
import { SwitchMode } from '@/components/feature/switchMode';
import { TodayTasks } from '@/components/feature/todayTasks';
import { BottomUserSidebar } from '@/layout/bottomUserSidebar';
import { ButtonDeleteAllTasks } from '@/components/feature/button/buttonDeleteAllTasks';
export function UserSidebar() {
  return (
    <aside className="bg-slate-100 h-screen w-60 xl:w-2/12 fixed dark:bg-slate-800 z-20 top-0 right-0  block">
      <div className="p-5 flex flex-col h-full">
        <HeaderUserSidebar />
        <SwitchMode />
        <ProgressTask />
        <hr className="my-5 border-t-2 border-gray-300 " />
        <TodayTasks />
        <hr className="my-5 border-t-2 border-gray-300 " />
        <ButtonDeleteAllTasks />
        <BottomUserSidebar />
      </div>
    </aside>
  );
}
