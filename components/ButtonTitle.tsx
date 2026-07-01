import { Button } from "./ui/button";
import { Plus } from "lucide-react";

interface ButtonTitleProps {
  title: string;
}

export default function ButtonTitle({ title }: ButtonTitleProps) {
  return (
    <Button className="bg-blue-dark text-white py-6 px-6 font-bold">
      <Plus />
      {title}
    </Button>
  );
}
