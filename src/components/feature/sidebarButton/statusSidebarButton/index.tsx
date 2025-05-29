import { Button } from '@/components/ui/button';
import { BsLayoutTextSidebarReverse } from 'react-icons/bs';
import { useSidebar } from '@/contexts/sidebar/context';
import { cn } from '@/lib/utils';

export function StatusSidebarButton() {
  const { toggleTaskSidebar, isTaskSidebarOpen } = useSidebar();

  return (
    <Button 
      variant="ghost" 
      className={cn(
        "p-0 hover:bg-transparent xl:hidden",
        isTaskSidebarOpen ? "text-primary" : "text-gray-500"
      )}
      onClick={toggleTaskSidebar}
    >
      <BsLayoutTextSidebarReverse style={{width: "25px", height: "25px"}} />
    </Button>
  );
}
