import { UserAvatar } from '../userAvatar';
import { UserTitle } from '../title/userTitle';

export function HeaderUserSidebar() {
  return (
    <header>
      <div className="flex items-center justify-center gap-3">
        <div className="flex items-center">
          <UserTitle />
        </div>
        <div className="flex items-center">
          <UserAvatar />
        </div>
      </div>
    </header>
  );
}
