import { NavLink as RouterNavLink, NavLinkProps, NavLinkRenderProps } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface CustomNavLinkProps extends NavLinkProps {
  children: React.ReactNode;
}

const baseClass = 'px-4 py-2 w-full block transition hover:text-rose-600 dark:hover:text-slate-200';
const activeClass = 'text-rose-600 bg-violet-100 border-r-4 border-rose-500 dark:bg-slate-700/[.2] dark:text-slate-200 dark:border-slate-200 active';

export function NavLink({ children, className, ...props }: CustomNavLinkProps) {
  return (
    <RouterNavLink
      {...props}
      className={(navProps: NavLinkRenderProps) =>
        cn(
          baseClass,
          navProps.isActive && activeClass,
          className
        )
      }
      aria-current={props['aria-current'] ?? undefined}
    >
      {children}
    </RouterNavLink>
  );
} 