import { useDirectory } from '@/contexts/directory/context';
import { FaFolder } from 'react-icons/fa';
import { NavLink } from '@/components/feature/navlink';
import { EditDirectory } from '../editDirectory';
import { DeleteDirectory } from '../deleteDirectory';

export function NavLinkDirectory() {
  const { directories } = useDirectory();

  const renderedDirs = directories.map((dir) => (
    <div key={dir.id} className="relative group">
      <NavLink to={dir.path} className="block">
        <div className="flex items-center gap-2">
          <div className="min-w-[16px] min-h-[16px]">
            <FaFolder size={16} />
          </div>
          <span className="text-base line-clamp-1">{dir.name}</span>
        </div>
      </NavLink>
      {dir.id !== 'main' && (
        <div className="flex items-center gap-3 absolute right-3 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
          <EditDirectory directoryId={dir.id} initialName={dir.name} />
          <DeleteDirectory directoryId={dir.id} />
        </div>
      )}
    </div>
  ));

  return <div className="flex flex-col gap-2">{renderedDirs}</div>;
}
