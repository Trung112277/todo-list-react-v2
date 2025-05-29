import { Button } from '@/components/ui/button';
import { UserAvatar } from '@/components/common/userAvatar';
import { useSidebar } from '@/contexts/sidebar/context';
import { cn } from '@/lib/utils';

export function UserSidebarButton() {
  const { toggleUserSidebar, isUserSidebarOpen } = useSidebar();

  return (
    <Button 
      variant="ghost" 
      className={cn(
        'p-0 hover:bg-transparent xl:hidden',
        isUserSidebarOpen && 'text-primary'
      )}
      onClick={toggleUserSidebar}
    >
      <UserAvatar />
    </Button>
  );
}
