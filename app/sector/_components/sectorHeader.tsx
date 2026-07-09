"use client";

import DialogComponent from "@/components/DialogComponent";
import TitlePage from "@/components/TitlePage";
import { useState } from "react";
import FormSectorComponent from "./formSectorComponent";

export default function SectorHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex items-center justify-between">
      <TitlePage
        title="Gerenciamento de Setores"
        description="Visualize e organize as unidades estruturais da organização."
      />

      <DialogComponent
        dialogHeader="Novo Setor"
        dialogDescription="Preencha as informações para criar um novo setor."
      >
        <FormSectorComponent changeStatusModal={setIsModalOpen} />
      </DialogComponent>
    </div>
  );
}
