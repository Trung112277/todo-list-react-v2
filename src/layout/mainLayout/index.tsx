import { UserSidebar } from '../userSidebar';
import { TaskSidebar } from '../taskSidebar';
import { Footer } from '../footer';
import { MainContent } from '../mainContent';
import { ErrorAlert } from '@/components/common/ErrorAlert';
import { DirectoryProviderWrapper } from '@/components/feature/directories/directoryProviderWrapper';

export function MainLayout() {
  return (
    <DirectoryProviderWrapper>
      <ErrorAlert />
      <TaskSidebar />
      <MainContent />
      <Footer />
      <UserSidebar />
    </DirectoryProviderWrapper>
  );
}
