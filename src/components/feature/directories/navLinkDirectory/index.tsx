import { useEffect, useState, useMemo } from 'react';
import { Directory } from '@/types/directory';
import { directories as mockDirectories } from '@/constants/directories';
import { FaFolder } from 'react-icons/fa';
import { NavLink } from '@/components/feature/navlink';
import { EditDirectory } from '../editDirectory';
import { DeleteDirectory } from '../deleteDirectory';

interface NavLinkDirectoryProps {
  directories?: Directory[];
}

export function NavLinkDirectory({ directories }: NavLinkDirectoryProps) {
  const [dirs, setDirs] = useState<Directory[]>(directories ?? []);

  useEffect(() => {
    if (!directories) {
      setTimeout(() => setDirs(mockDirectories), 200);
    }
  }, [directories]);

  const renderedDirs = useMemo(
    () =>
      dirs.map((dir) => (
        <div key={dir.id} className="relative group">
          <NavLink to={dir.path} className="block">
            <div className="flex items-center gap-2">
              <div className="min-w-[16px] min-h-[16px]">
                <FaFolder size={16} />
              </div>
              <span className="text-base line-clamp-1">{dir.name}</span>
            </div>
          </NavLink>
          <div className="flex items-center gap-3 absolute right-3 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <EditDirectory />
            <DeleteDirectory />
          </div>
        </div>
      )),
    [dirs]
  );

  return <div className="flex flex-col gap-2">{renderedDirs}</div>;
}
