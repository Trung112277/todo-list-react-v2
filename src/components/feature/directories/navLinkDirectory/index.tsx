import { useEffect, useState, useMemo } from "react";
import { Directory } from "@/types/directory";
import { directories as mockDirectories } from '@/constants/directory';
import { FaFolder } from "react-icons/fa";
import { NavLink } from "@/components/feature/navlink";

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

  const renderedDirs = useMemo(() => dirs.map((dir) => (
    <NavLink
      key={dir.id}
      to={dir.path}
    >
      <div className="flex items-center gap-2">
        <FaFolder  size={16} />
        <span className="text-base">{dir.name}</span>
      </div>
    </NavLink>
  )), [dirs]);

  return <div className="flex flex-col gap-2">{renderedDirs}</div>;
}