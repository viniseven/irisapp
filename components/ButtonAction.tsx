import { Button } from "./ui/button";

interface ButtonTitleProps {
  title?: string;
  type?: "button" | "submit" | "reset" | undefined;
  children?: React.ReactNode;
  form?: string;
  onClick?: () => void; // Declarado como opcional
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | undefined;
}

export default function ButtonAction({
  type,
  children,
  form,
  onClick, // 1. Recebe o onClick aqui
  variant, // 2. Recebe a variant aqui
}: ButtonTitleProps) {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      type={type}
      form={form}
      className="px-6 py-6 font-bold hover:cursor-pointer"
    >
      {children}
    </Button>
  );
}
