export const UserSidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <aside className="bg-slate-100 h-screen w-60 xl:w-2/12 fixed dark:bg-slate-800 z-20 top-0 right-0  block">
      {children}
    </aside>
  );
};
