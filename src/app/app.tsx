import { AppRoutes } from './routes';
import { TaskProvider } from '@/contexts/task';
import { ErrorProvider } from '@/contexts/error/context';
import { LoadingProvider } from '@/contexts/loading/context';
import { DialogProvider } from '@/contexts/dialog/context';
import { DirectoryProvider } from '@/contexts/directory/context';
import { DirectoryDialogProvider } from '@/contexts/directoryDialog/context';
import { SearchProvider } from '@/contexts/search/context';
import LoadingSpinner from '@/components/common/LoadingSpinner';

export function App() {
  return (
    <ErrorProvider>
      <LoadingProvider>
        <DirectoryProvider>
          <TaskProvider>
            <SearchProvider>
              <DialogProvider>
                <DirectoryDialogProvider>
                  <LoadingSpinner />
                  <AppRoutes />
                </DirectoryDialogProvider>
              </DialogProvider>
            </SearchProvider>
          </TaskProvider>
        </DirectoryProvider>
      </LoadingProvider>
    </ErrorProvider>
  );
}

export default App;
