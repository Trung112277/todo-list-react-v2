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
import LoadingSpinner from '@/components/common/LoadingSpinner';

export function App() {
  return (
    <ErrorProvider>
      <LoadingProvider>
        <DirectoryProvider>
          <TaskProvider>
            <ProgressProvider>
              <SearchProvider>
                <DialogProvider>
                  <DirectoryDialogProvider>
                    <ViewTasksProvider>
                      <LoadingSpinner />
                      <AppRoutes />
                    </ViewTasksProvider>
                  </DirectoryDialogProvider>
                </DialogProvider>
              </SearchProvider>
            </ProgressProvider>
          </TaskProvider>
        </DirectoryProvider>
      </LoadingProvider>
    </ErrorProvider>
  );
}

export default App;
