import { Button } from '@/components/ui/button';
import { useState } from 'react';

export function TaskItemStatus() {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleClick = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <Button
      onClick={handleClick}
      className={`rounded-full font-medium p-0 h-8 hover:brightness-95 transition-all duration-300 ${
        isCompleted
          ? 'bg-emerald-200 text-emerald-800'
          : 'bg-amber-200 text-amber-800'
      }`}
    >
      {isCompleted ? 'complete' : 'uncomplete'}
    </Button>
  );
}
