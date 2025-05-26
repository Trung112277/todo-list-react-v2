import { createContext, useContext, useState, ReactNode } from 'react';

interface DirectoryDialogContextType {
  isOpen: boolean;
  openDialog: () => void;
  closeDialog: () => void;
}

const DirectoryDialogContext = createContext<DirectoryDialogContextType | undefined>(undefined);

export function DirectoryDialogProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <DirectoryDialogContext.Provider value={{ isOpen, openDialog, closeDialog }}>
      {children}
    </DirectoryDialogContext.Provider>
  );
}

export function useDirectoryDialog(): DirectoryDialogContextType {
  const context = useContext(DirectoryDialogContext);
  if (!context) {
    throw new Error('useDirectoryDialog must be used within a DirectoryDialogProvider');
  }
  return context;
} 