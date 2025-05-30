import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useSortTasks } from '@/hooks/useSortTasks';
import { sortOptions } from '@/types/sortTask';

export function SortTasks() {
  const { currentSort, handleSort } = useSortTasks();

  return (
    <Select value={currentSort} onValueChange={handleSort}>
      <SelectTrigger className="sm:max-w-[200px] max-w-[170px] text-md">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent className="border-none">
        {sortOptions.map(({ value, label }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
