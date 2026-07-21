"use client";

import DialogComponent from "@/components/DialogComponent";
import TitlePage from "@/components/TitlePage";

export default function SectorHeader() {
  return (
    <div className="flex items-center justify-between">
      <TitlePage
        title="Gerenciamento de Setores"
        description="Visualize e organize as unidades estruturais da organização."
      />

      <DialogComponent
        dialogHeader="Novo Setor"
        dialogDescription="Preencha as informações para criar um novo setor."
      />
    </div>
  );
}
