import { Button } from '@/components/ui/button';

interface ButtonFormProps {
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function ButtonForm({ children, className, type = 'submit' }: ButtonFormProps) {
  return (
    <Button type={type} className={className}>
      {children}
    </Button>
  );
}
