import { cn } from "@/lib/utils";

export function SubTitle({ children, className }: { children: React.ReactNode, className?: string }) {
    return <h2 className={cn("font-medium mb-5 text-lg md:text-2xl", className)}>{children}</h2>
}
