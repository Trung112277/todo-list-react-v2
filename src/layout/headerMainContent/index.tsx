import { MainTitle } from '@/components/common/title/mainTitle';
import { TodayTimes } from '@/components/common/todayTimes';
import { NotificationBox } from '@/components/feature/notificationBox';
import { SearchInputTask } from '@/components/feature/searchInputTask';
import { StatusSidebarButton } from '@/components/feature/sidebarButton/statusSidebarButton';

export function HeaderMainContent() {
  return (
    <header className="flex justify-between items-center gap-4">
      <div className="flex items-center gap-4">
        <StatusSidebarButton />
        <div className='hidden sm:block'>
        <SearchInputTask />
        </div>
      </div>
      <div className="xl:-translate-x-1/2 text-center sm:translate-x-0 translate-x-1/2">
        <h1 className="text-slate-600 dark:text-slate-200 uppercase font-bold text-sm block xl:hidden">
          <MainTitle />
        </h1>
        <TodayTimes />
      </div>
      <NotificationBox />
    </header>
  );
}
