export function MainContent({ children }: { children: React.ReactNode }) {
  return <main className="bg-slate-200 pt-5 pb-8 sm:pb-16 px-3 md:px-8 md:w-full xl:w-8/12 m-auto min-h-screen overflow-y-auto">{children}</main>;
}
