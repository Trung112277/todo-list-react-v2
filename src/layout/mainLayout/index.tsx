import { UserSidebar } from '../userSidebar';
import { TaskSidebar } from '../taskSidebar';
import { Footer } from '../footer';
import { MainContent } from '../mainContent';
import { TaskProvider } from '@/contexts/task';
import { ErrorProvider } from '@/contexts/error/context';
import { DirectoryProvider } from '@/contexts/directory/context';
import { ErrorAlert } from '@/components/common/ErrorAlert';

export function MainLayout() {
  return (
    <ErrorProvider>
      <DirectoryProvider>
        <TaskProvider>
          <ErrorAlert />
          <TaskSidebar />
          <MainContent />
          <Footer />
          <UserSidebar />
        </TaskProvider>
      </DirectoryProvider>
    </ErrorProvider>
  );
}
