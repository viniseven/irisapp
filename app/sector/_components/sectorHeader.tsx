"use client";

import TitlePage from "@/components/TitlePage";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ButtonAction from "@/components/ButtonAction";
import { Plus } from "lucide-react";
import { useState } from "react";
import UpsertDialogSectorComponent from "./upsertDialogContent";

export default function SectorHeader() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-between">
      <TitlePage
        title="Gerenciamento de Setores"
        description="Visualize e organize as unidades estruturais da organização."
      />

      <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
        <DialogTrigger asChild>
          <ButtonAction title="Novo Setor">
            <Plus />
          </ButtonAction>
        </DialogTrigger>
        <UpsertDialogSectorComponent onSuccess={() => setDialogIsOpen(false)} />
      </Dialog>
    </div>
  );
}
