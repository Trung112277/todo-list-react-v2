import { ButtonForm } from '../buttonForm';
import { InputForm } from '../inputForm';
import { useDirectory } from '@/contexts/directory/context';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Directory } from '@/types/directory';
import { useDirectoryDialog } from '@/contexts/directoryDialog/context';

interface FormDirectoryProps {
  buttonText: string;
  initialName?: string;
  directoryId?: string;
  onSuccess?: () => void;
}

export function FormDirectory({ buttonText, initialName = '', directoryId, onSuccess }: FormDirectoryProps) {
  const [name, setName] = useState(initialName);
  const { addDirectory, editDirectory, directories } = useDirectory();
  const { closeDialog } = useDirectoryDialog();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      return;
    }

    try {
      if (directoryId) {
        await editDirectory(directoryId, name);
        // Đóng dialog trước
        closeDialog();
        if (onSuccess) {
          onSuccess();
        }
        // Đảm bảo dữ liệu được lưu hoàn toàn
        const updatedDirectories = directories.map(dir => {
          if (dir.id === directoryId) {
            // Tạo ID mới từ tên mới
            const newId = name.toLowerCase().replace(/\s+/g, '-');
            return { 
              ...dir, 
              id: newId,
              name,
              path: `/directory/${newId}`
            };
          }
          return dir;
        });
        localStorage.setItem('directories', JSON.stringify(updatedDirectories));
        // Sau đó chuyển về trang home
        window.location.href = '/';
      } else {
        await addDirectory(name);
        closeDialog();
        if (onSuccess) {
          onSuccess();
        }
      }
    } catch (error) {
      console.error('Error handling directory:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      <InputForm
        title="Title"
        placeholder="Enter a directory name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <ButtonForm type="submit" className="w-fit">{buttonText}</ButtonForm>
    </form>
  );
}
