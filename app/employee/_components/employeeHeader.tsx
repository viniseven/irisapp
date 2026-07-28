"use client";

import ButtonAction from "@/components/ButtonAction";
import TitlePage from "@/components/TitlePage";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { useState } from "react";
import UpsertDialogEmployeeComponent from "./upsertDialogContent";

export default function EmployeeHeader() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between">
      <TitlePage
        title="Gerenciamento de Colaboradores"
        description="Gerencie a base de colaboradores da organização."
      />
      <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
        <DialogTrigger asChild>
          <ButtonAction title="Novo Colaborador">
            <Plus />
          </ButtonAction>
        </DialogTrigger>
        <UpsertDialogEmployeeComponent
          onSuccess={() => setDialogIsOpen(false)}
          isOpen={dialogIsOpen}
        />
      </Dialog>
    </div>
  );
}
