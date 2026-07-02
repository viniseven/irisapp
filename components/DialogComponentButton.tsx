import FormSectorComponent from "@/app/sector/_components/FormSectorComponent";
import ButtonAction from "./ButtonAction";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";
import { Plus } from "lucide-react";

interface DialogComponentProps {
  dialogHeader?: string;
  dialogDescription?: string;
}

export default function DialogComponent({
  dialogHeader,
  dialogDescription,
}: DialogComponentProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <ButtonAction>
          <Plus />
          Novo Setor
        </ButtonAction>
      </DialogTrigger>
      <DialogContent className="bg-background">
        <DialogHeader className="text-2xl font-bold">
          {dialogHeader}
        </DialogHeader>
        <DialogDescription className="text-text-muted">
          {dialogDescription}
        </DialogDescription>
        <FormSectorComponent />
      </DialogContent>
    </Dialog>
  );
}
