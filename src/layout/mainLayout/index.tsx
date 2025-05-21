import { UserSidebar } from '../userSidebar';
import { TaskSidebar } from '../taskSidebar';
import { Footer } from '../footer';
import { Outlet } from 'react-router-dom';
import { MainContent } from '../mainContent';
export function MainLayout() {
  return (
    <>
      <TaskSidebar />
      <MainContent>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facere
          repellendus vero dignissimos, officia architecto nostrum blanditiis?
          Rerum, ipsa debitis.\
        </p>
        <Outlet />
      </MainContent>
      <Footer />
      <UserSidebar>
        <div>UserSidebar</div>
      </UserSidebar>
    </>
  );
}
