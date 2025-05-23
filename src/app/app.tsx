import { AppRoutes } from './routes';
import { TaskProvider } from '@/contexts/task';
import { ErrorProvider } from '@/contexts/error/context';
import { LoadingProvider } from '@/contexts/loading/context';
import LoadingSpinner from '@/components/common/LoadingSpinner';

export function App() {
  return (
    <ErrorProvider>
      <LoadingProvider>
        <TaskProvider>
          <LoadingSpinner />
          <AppRoutes />
        </TaskProvider>
      </LoadingProvider>
    </ErrorProvider>
  );
}

export default App;
