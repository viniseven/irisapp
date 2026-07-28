import { ComponentPropsWithoutRef } from "react";
import { Button } from "./ui/button";

interface ButtonTitleProps extends ComponentPropsWithoutRef<typeof Button> {
  title?: string;
  children?: React.ReactNode;
}

export default function ButtonAction({
  title,
  children,
  ...props
}: ButtonTitleProps) {
  return (
    <Button {...props} className="p-5 font-bold hover:cursor-pointer">
      {children}
      {title}
    </Button>
  );
}
