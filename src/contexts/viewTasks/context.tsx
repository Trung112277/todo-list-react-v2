import { createContext, useContext, useState, ReactNode } from 'react';

type ViewType = 'grid' | 'list';

interface ViewTasksContextType {
  view: ViewType;
  setView: (view: ViewType) => void;
}

const ViewTasksContext = createContext<ViewTasksContextType | undefined>(undefined);

export function ViewTasksProvider({ children }: { children: ReactNode }) {
  const [view, setView] = useState<ViewType>('grid');

  return (
    <ViewTasksContext.Provider value={{ view, setView }}>
      {children}
    </ViewTasksContext.Provider>
  );
}

export function useViewTasks() {
  const context = useContext(ViewTasksContext);
  if (context === undefined) {
    throw new Error('useViewTasks must be used within a ViewTasksProvider');
  }
  return context;
} 