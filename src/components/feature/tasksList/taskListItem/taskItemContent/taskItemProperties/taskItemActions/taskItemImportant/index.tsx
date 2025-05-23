import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { IoStar } from 'react-icons/io5';

export function TaskItemImportant() {
  const [isMark, setIsMark] = useState(false);

  const handleClick = () => {
    setIsMark(!isMark);
  };
  return (
    <Button
      variant="ghost"
      onClick={handleClick}
      className="p-0 h-8 hover:bg-transparent"
    >
      <IoStar
        className={`text-gray-500 ${isMark ? 'text-red-500' : ''}`}
        size={30}
        strokeWidth={1.5}
        style={{ width: '20px', height: '20px' }}
      />
    </Button>
  );
}
