import { UserSidebar } from '../userSidebar';
import { TaskSidebar } from '../taskSidebar';
import { Footer } from '../footer';
import { MainContent } from '../mainContent';
import { TaskProvider } from '@/contexts/task';
import { ErrorAlert } from '@/components/common/ErrorAlert';
import { DirectoryProviderWrapper } from '@/components/feature/directories/directoryProviderWrapper';

export function MainLayout() {
  return (
    <TaskProvider>
      <DirectoryProviderWrapper>
        <ErrorAlert />
        <TaskSidebar />
        <MainContent />
        <Footer />
        <UserSidebar />
      </DirectoryProviderWrapper>
    </TaskProvider>
  );
}
