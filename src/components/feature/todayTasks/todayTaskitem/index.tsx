interface TodayTaskItemProps {
  children: React.ReactNode;
}

export function TodayTaskItem({ children }: TodayTaskItemProps) {
  return <li className="text-sm font-normal line-clamp-1">{children}</li>;
}
