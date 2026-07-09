"use client";

import DialogComponent from "@/components/DialogComponent";
import TitlePage from "@/components/TitlePage";
import { useState } from "react";
import FormEmployeeComponent from "./formEmployeeComponent";

export default function EmployeeHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex items-center justify-between">
      <TitlePage
        title="Gerenciamento de Colaboradores"
        description="Gerencie a base de colaboradores da organização."
      />

      <DialogComponent
        dialogHeader="Novo colaborador"
        dialogDescription="Preencha as informações para cadastrar um novo colaborador."
      >
        <FormEmployeeComponent changeStatusModal={setIsModalOpen} />
      </DialogComponent>
    </div>
  );
}
