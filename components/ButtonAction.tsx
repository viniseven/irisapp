import { ComponentPropsWithoutRef } from "react";
import { Button } from "./ui/button";

interface ButtonTitleProps extends ComponentPropsWithoutRef<typeof Button> {
  title?: string;
  children?: React.ReactNode;
}

export default function ButtonAction({ children, ...props }: ButtonTitleProps) {
  return (
    <Button {...props} className="px-6 py-6 font-bold hover:cursor-pointer">
      {children}
    </Button>
  );
}
