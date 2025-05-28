import { Progress } from '@/components/ui/progress';

interface ProgressBarProps {
  value: number;
}

export function ProgressBar({ value }: ProgressBarProps) {
  const percentage = Math.round(value);
  
  return (
    <div className="w-full">
      <Progress value={percentage} className="h-2" />
    </div>
  );
}
