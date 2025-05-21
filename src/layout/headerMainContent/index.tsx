import { TodayTimes } from '@/components/common/todayTimes';
import { NotificationBox } from '@/components/feature/notificationBox';
import { SearchInputTask } from '@/components/feature/searchInputTask';

export function HeaderMainContent() {
  return (
    <header className="flex justify-between items-center">
      <SearchInputTask />
      <TodayTimes />
      <NotificationBox />
    </header>
  );
}
