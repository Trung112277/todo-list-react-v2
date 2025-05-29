import { cn } from "@/lib/utils";

interface AddNewDirectoryButtonProps {
  onClick?: () => void;
}

export function AddNewDirectoryButton({ onClick }: AddNewDirectoryButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={cn(
                "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                "bg-primary text-primary-foreground hover:bg-primary/90 dark:text-slate-200",
                "h-10 px-4 py-2 rounded-md"
            )}
        >
            + New
        </button>
    )
}