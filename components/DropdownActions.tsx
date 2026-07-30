import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import ButtonAction from "./ButtonAction";
import { useState } from "react";
import { Dialog } from "./ui/dialog";

interface DropDownActionsComponentProps {
  children: React.ReactNode;
}

export default function DropDownActions({
  children,
}: DropDownActionsComponentProps) {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <ButtonAction
            variant={"outline"}
            className="h-8 w-8 rounded-full p-0 transition-colors hover:bg-slate-200"
          >
            <MoreHorizontal className="h-4 w-4 text-slate-500" />
          </ButtonAction>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-40 bg-white">
          <DropdownMenuItem
            className="cursor-pointer"
            onSelect={() => setDialogIsOpen(true)}
          >
            Editar Setor
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer text-red-600 focus:bg-red-50 focus:text-red-600">
            Excluir
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {children}
    </Dialog>
  );
}
