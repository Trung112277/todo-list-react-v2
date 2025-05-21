import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export function SearchInputTask() {
  return (
    <div className="relative w-full max-w-[300px]">
      <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search task"
        className="pr-8 [&::-webkit-search-cancel-button]:hidden text-md text-gray-500 placeholder:text-gray-400"
      />
    </div>
  );
}
