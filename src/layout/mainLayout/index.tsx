import { UserSidebar } from '../userSidebar';
import { TaskSidebar } from '../taskSidebar';
import { Footer } from '../footer';
import { MainContent } from '../mainContent';
import { TaskProvider } from '@/contexts/task';
import { ErrorProvider } from '@/contexts/error/context';
import { ErrorAlert } from '@/components/common/ErrorAlert';

export function MainLayout() {
  return (
    <ErrorProvider>
      <TaskProvider>
        <ErrorAlert />
        <TaskSidebar />
        <MainContent />
        <Footer />
        <UserSidebar />
      </TaskProvider>
    </ErrorProvider>
  );
}
