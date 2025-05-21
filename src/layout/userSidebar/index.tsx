import { HeaderUserSidebar } from '@/components/common/headerUserSidebar';

export function UserSidebar() {
  return (
    <aside className="bg-slate-100 h-screen w-60 xl:w-2/12 fixed dark:bg-slate-800 z-20 top-0 right-0  block">
      <div className="p-5 flex flex-col h-full">
        <HeaderUserSidebar />
      </div>
    </aside>
  );
}
