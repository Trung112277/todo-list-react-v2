import { useEffect } from 'react';
export function PageMainDirectory() {
  useEffect(() => {
    document.title = "To-Do List | Main Directory";
  }, []);
  return (
    <div>
      <h1>Main Directory</h1>
    </div>
  );
}
