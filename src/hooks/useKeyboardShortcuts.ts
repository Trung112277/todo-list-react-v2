import { useEffect } from 'react';

export function useKeyboardShortcuts() {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Shift + N to add new task
      if (e.shiftKey && e.key.toLowerCase() === 'n') {
        e.preventDefault();
        // Trigger add task dialog
        const addButton = document.querySelector('[data-add-task]');
        if (addButton instanceof HTMLElement) {
          addButton.click();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);
} 