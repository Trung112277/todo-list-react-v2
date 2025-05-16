import { NavLink } from 'react-router-dom';

export function TaskStatusNav({
  path,
  title,
  icon,
}: {
  path: string;
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive ? 'bg-primary text-primary-foreground' : ''
      }
    >
      <div>
        <span>{title}</span>
      </div>
    </NavLink>
  );
}
