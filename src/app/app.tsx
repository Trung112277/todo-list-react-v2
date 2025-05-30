import { AppRoutes } from './routes';
import { ErrorProvider } from '@/contexts/error/context';
import { LoadingProvider } from '@/contexts/loading/context';
import { TaskProvider } from '@/contexts/task';
import { ProgressProvider } from '@/contexts/progress/context';
import { DirectoryProvider } from '@/contexts/directory/context';
import { SearchProvider } from '@/contexts/search/context';
import { DialogProvider } from '@/contexts/dialog/context';
import { DirectoryDialogProvider } from '@/contexts/directoryDialog/context';
import { ViewTasksProvider } from '@/contexts/viewTasks/context';
import { ThemeProvider } from '@/contexts/theme/context';
import { SidebarProvider } from '@/contexts/sidebar/context';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { SidebarOverlay } from '@/components/common/sidebarOverlay';

export function App() {
  return (
    <ThemeProvider>
      <ErrorProvider>
        <LoadingProvider>
          <TaskProvider>
            <DirectoryProvider>
              <ViewTasksProvider>
                <ProgressProvider>
                  <SearchProvider>
                    <DialogProvider>
                      <DirectoryDialogProvider>
                        <SidebarProvider>
                          <LoadingSpinner />
                          <SidebarOverlay />
                          <AppRoutes />
                        </SidebarProvider>
                      </DirectoryDialogProvider>
                    </DialogProvider>
                  </SearchProvider>
                </ProgressProvider>
              </ViewTasksProvider>
            </DirectoryProvider>
          </TaskProvider>
        </LoadingProvider>
      </ErrorProvider>
    </ThemeProvider>
  );
}

export default App;
