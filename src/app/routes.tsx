import { Routes, Route } from 'react-router-dom';
import { PageAllTasks } from '../components/pages/allTasks';
import { PageCompletedTasks } from '../components/pages/completedTasks';
import { PageImportantTasks } from '../components/pages/importantTasks';
import { PageTodayTasks } from '../components/pages/todayTasks';
import { PageUncompletedTasks } from '../components/pages/uncompletedTasks';
import { MainLayout } from '../layout/mainLayout';
import { DirectoryPage } from '../components/pages/directoryTasks/DirectoryPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="today" element={<PageTodayTasks />} />
        <Route index element={<PageAllTasks />} />
        <Route path="important" element={<PageImportantTasks />} />
        <Route path="completed" element={<PageCompletedTasks />} />
        <Route path="uncompleted" element={<PageUncompletedTasks />} />
        <Route path="directory/:directoryId" element={<DirectoryPage />} />
      </Route>
    </Routes>
  );
}
