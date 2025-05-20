import { Button } from '@/components/ui/button';

interface ButtonFormProps {
  children: React.ReactNode;
  className?: string;
}

export function ButtonForm({ children, className }: ButtonFormProps) {
  return <div>
    <Button type="submit" className={className}>{children}</Button>
    </div>;
}
