import { useEffect } from 'react';
export function PageMainDirectory() {
  useEffect(() => {
    document.title = "To-Do List | Main Directory";
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-bold text-red-500">Main Directory</h1>
    </div>
  );
}
