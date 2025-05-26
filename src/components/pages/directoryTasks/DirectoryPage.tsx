import { StatusTitle } from '@/components/common/title/statusTitle';
import { usePageTitle } from '@/hooks/usePageTitle';
import { useDirectory } from '@/contexts/directory/context';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Directory } from '@/types/directory';

export function DirectoryPage() {
  const { directoryId } = useParams();
  const { directories } = useDirectory();
  const [currentDirectory, setCurrentDirectory] = useState<Directory | undefined>();
  
  useEffect(() => {
    const directory = directoryId 
      ? directories.find(dir => dir.id === directoryId)
      : directories.find(dir => dir.id === 'main');
      
    if (directory) {
      setCurrentDirectory(directory);
    }
  }, [directoryId, directories]);

  // Set page title to include directory name
  usePageTitle(currentDirectory?.name ? `${currentDirectory.name}` : 'Directory');

  // Hiển thị loading state khi chưa có dữ liệu
  if (!currentDirectory) {
    return (
      <div className="flex flex-col gap-4">
        <StatusTitle title="Loading..." />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <StatusTitle title={`${currentDirectory.name}'s Tasks`} />
      {/* Add your directory content here */}
    </div>
  );
}
 