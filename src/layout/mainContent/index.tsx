import { HeaderMainContent } from '@/layout/headerMainContent';
import { Outlet } from 'react-router-dom';
import { ActionsBox } from '../actionsBox';
import { TasksList } from '@/components/feature/tasksList';

export function MainContent() {
  return (
    <main className="bg-slate-200 pt-5 pb-8 sm:pb-16 px-3 md:px-8 md:w-full xl:w-8/12 m-auto min-h-screen overflow-y-auto">
      <HeaderMainContent />
      <Outlet />
      <ActionsBox />
      <TasksList />
    </main>
  );
}
