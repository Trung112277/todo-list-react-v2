import { UserSidebar } from '../userSidebar';
import { TaskSidebar } from '../taskSidebar';
import { Footer } from '../footer';
import { MainContent } from '../mainContent';
import { TaskProvider } from '@/contexts/task';

export function MainLayout() {
  return (
    <TaskProvider>
      <TaskSidebar />
      <MainContent />
      <Footer />
      <UserSidebar />
    </TaskProvider>
  );
}
