import { createContext, useContext, useState, ReactNode } from 'react';

interface SidebarContextType {
  isTaskSidebarOpen: boolean;
  isUserSidebarOpen: boolean;
  toggleTaskSidebar: () => void;
  toggleUserSidebar: () => void;
  closeAllSidebars: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isTaskSidebarOpen, setIsTaskSidebarOpen] = useState(false);
  const [isUserSidebarOpen, setIsUserSidebarOpen] = useState(false);

  const toggleTaskSidebar = () => {
    setIsTaskSidebarOpen(prev => !prev);
    // Đóng user sidebar khi mở task sidebar
    if (!isTaskSidebarOpen) {
      setIsUserSidebarOpen(false);
    }
  };

  const toggleUserSidebar = () => {
    setIsUserSidebarOpen(prev => !prev);
    // Đóng task sidebar khi mở user sidebar
    if (!isUserSidebarOpen) {
      setIsTaskSidebarOpen(false);
    }
  };

  const closeAllSidebars = () => {
    setIsTaskSidebarOpen(false);
    setIsUserSidebarOpen(false);
  };

  return (
    <SidebarContext.Provider 
      value={{ 
        isTaskSidebarOpen, 
        isUserSidebarOpen, 
        toggleTaskSidebar, 
        toggleUserSidebar,
        closeAllSidebars
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
} 