import { Routes, Route, Navigate } from 'react-router-dom';
import { PageAllTasks } from '../components/pages/allTasks';
import { PageCompletedTasks } from '../components/pages/completedTasks';
import { PageImportantTasks } from '../components/pages/importantTasks';
import { PageTodayTasks } from '../components/pages/todayTasks';
import { PageUncompletedTasks } from '../components/pages/uncompletedTasks/index';
import { MainLayout } from '../layout/mainLayout';
import DirectoriesPage from '../components/pages/directoryTasks/directoriesPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<PageAllTasks />} />
        <Route path="today" element={<PageTodayTasks />} />
        <Route path="important" element={<PageImportantTasks />} />
        <Route path="completed" element={<PageCompletedTasks />} />
        <Route path="uncompleted" element={<PageUncompletedTasks />} />
        <Route path="directory/:directoryId" element={<DirectoriesPage />} />
      </Route>
    </Routes>
  );
}
