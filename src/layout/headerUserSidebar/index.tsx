import { UserAvatar } from '../../components/common/userAvatar';
import { UserTitle } from '../../components/common/title/userTitle';

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
