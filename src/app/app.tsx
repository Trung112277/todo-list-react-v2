import { AppRoutes } from './routes';
import { TaskProvider } from '@/contexts/task';

export function App() {
  return (
    <TaskProvider>
      <AppRoutes />
    </TaskProvider>
  );
}

export default App;
