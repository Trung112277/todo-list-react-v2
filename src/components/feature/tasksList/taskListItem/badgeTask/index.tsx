import { Badge } from '@/components/ui/badge';
import { NavLink } from 'react-router-dom';

export function BadgeTask() {
  return (
    <Badge className="text-lg font-norma rounded-bl-[0] rounded-br-[0] ml-auto mr-4 w-min whitespace-nowrap overflow-hidden max-w-[10rem] text-center text-ellipsis bg-rose-200 text-rose-600 px-4 py-1 rounded-t-md transition dark:bg-slate-700 dark:text-slate-200 block hover:bg-rose-300 dark:hover:bg-rose-500">
      <NavLink to="/directory/main">Main</NavLink>
    </Badge>
  );
}
