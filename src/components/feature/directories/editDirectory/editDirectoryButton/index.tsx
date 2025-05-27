import { FaPencilAlt } from 'react-icons/fa';
import { cn } from "@/lib/utils";

interface EditDirectoryButtonProps {
  onClick?: () => void;
}

export function EditDirectoryButton({ onClick }: EditDirectoryButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={cn(
                "inline-flex items-center justify-center  rounded-md",
                " dark:hover:bg-gray-800",
                "transition-colors"
            )}
        >
            <FaPencilAlt className="w-4 h-4 hover:text-blue-500" />
        </button>
    );
}

