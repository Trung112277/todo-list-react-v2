import { UserSidebar } from '@/components/layout/userSidebar';
import { MainContent } from '@/components/layout/mainContent';
import { TaskSidebar } from '@/components/layout/taskSidebar';
import { Footer } from '@/components/layout/footer';

export function MainLayout() {
  return (
    <>
      <TaskSidebar />
      <MainContent />
      <Footer>To-do list</Footer>
      <UserSidebar />
    </>
  );
}
