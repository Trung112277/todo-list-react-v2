import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function SortTasks() {
  return (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent className="border-none">
        <SelectItem value="order-added">Order added</SelectItem>
        <SelectItem value="erlier">Earlier first</SelectItem>
        <SelectItem value="later">Later first</SelectItem>
        <SelectItem value="completed">Completed first</SelectItem>
        <SelectItem value="uncompleted">Uncompleted first</SelectItem>
      </SelectContent>
    </Select>
  );
}
