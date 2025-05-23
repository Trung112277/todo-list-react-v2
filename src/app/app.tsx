import { AppRoutes } from './routes';
import { TaskProvider } from '@/contexts/task';
import { ErrorProvider } from '@/contexts/error/context';

export function App() {
  return (
    <ErrorProvider>
      <TaskProvider>
        <AppRoutes />
      </TaskProvider>
    </ErrorProvider>
  );
}

export default App;
