import { DirectoryProvider } from '@/contexts/directory/context';
import { useTask } from '@/contexts/task';

export function DirectoryProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { dispatch: taskDispatch } = useTask();

  return (
    <DirectoryProvider taskDispatch={taskDispatch}>
      {children}
    </DirectoryProvider>
  );
}
