import { UserSidebar } from '../userSidebar';
import { TaskSidebar } from '../taskSidebar';
import { Footer } from '../footer';
import { MainContent } from '../mainContent';
export function MainLayout() {
  return (
    <>
      <TaskSidebar />
      <MainContent />
      <Footer />
      <UserSidebar />
    </>
  );
}
