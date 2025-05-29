import { useSidebar } from '@/contexts/sidebar/context';
import { cn } from '@/lib/utils';

export function SidebarOverlay() {
  const { isTaskSidebarOpen, isUserSidebarOpen, closeAllSidebars } = useSidebar();

  if (!isTaskSidebarOpen && !isUserSidebarOpen) return null;

  return (
    <div 
      className={cn(
        "fixed inset-0 bg-slate-600/[.2] z-20 xl:hidden",
        "transition-opacity duration-300",
        (isTaskSidebarOpen || isUserSidebarOpen) ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      onClick={closeAllSidebars}
    />
  );
} 