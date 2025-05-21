import { useEffect } from 'react';

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = `To-Do List | ${title}`;
  }, [title]);
} 