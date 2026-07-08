import DialogComponentButton from "@/components/DialogComponentButton";
import TitlePage from "@/components/TitlePage";
import DataTable from "./_components/dataTable";
import { columns } from "./_components/columns";
import { getSectorEmployeeCount } from "../_dataAccess/sector/getSector";
import MetricsCard from "@/components/MetricsCard";

export default async function SectorPage() {
  const sectorsData = await getSectorEmployeeCount();

  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center justify-between">
        <TitlePage
          title="Gerenciamento de Setores"
          description="Visualize e organize as unidades estruturais da organização."
        />

        <DialogComponentButton
          dialogHeader="Novo Setor"
          dialogDescription="Preencha as informações para criar um novo setor."
        />
      </div>
      <div className="flex gap-8">
        <MetricsCard title="TOTAL DE SETORES" metric={12} />
        <MetricsCard title="COLABORADORES ATIVOS" metric={220} />
        <MetricsCard title="TAXA DE TREINAMENTO" metric={84.2} />
      </div>
      <div>
        <DataTable columns={columns} data={sectorsData} />
      </div>
    </div>
  );
}
