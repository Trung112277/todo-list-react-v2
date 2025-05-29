import { NavLink } from 'react-router-dom';

export function ProjectedBy() {
  return (
    <NavLink
      className="bg-rose-100 p-2 rounded-md text-rose-600 text-center transition hover:bg-rose-200 dark:bg-slate-700/[.3] dark:hover:bg-slate-700"
      to="https://github.com/Trung112277"
      target="_blank"
    >
      Projected by Nhật Trung
    </NavLink>
  );
}
