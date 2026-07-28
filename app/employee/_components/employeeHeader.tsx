"use client";

import TitlePage from "@/components/TitlePage";

export default function EmployeeHeader() {
  return (
    <div className="flex items-center justify-between">
      <TitlePage
        title="Gerenciamento de Colaboradores"
        description="Gerencie a base de colaboradores da organização."
      />
    </div>
  );
}
