import { useError } from '@/contexts/error/context';
import { X } from 'lucide-react';

export function ErrorAlert() {
  const { error, clearError } = useError();

  if (!error) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in">
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative flex items-center gap-2">
        <span>{error}</span>
        <button
          onClick={clearError}
          className="absolute top-0 bottom-0 right-0 px-4 py-3"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
} 