import { HeaderMainContent } from '@/layout/headerMainContent';
import { Outlet } from 'react-router-dom';

export function MainContent() {
  return (
    <main className="bg-slate-200 pt-5  px-3 md:px-8 md:w-full xl:w-8/12 m-auto min-h-screen overflow-y-auto ">
      <HeaderMainContent />
      <Outlet />
    </main>
  );
}
