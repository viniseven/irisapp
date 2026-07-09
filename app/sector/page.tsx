import DataTable from "./_components/dataTable";
import { columns } from "./_components/columns";
import { getSectorEmployeeCount } from "../_dataAccess/sector/getSector";
import MetricsCard from "@/components/MetricsCard";
import { formatPercent } from "@/lib/utils/formatPercent";
import SectorHeader from "./_components/sectorHeader";

export default async function SectorPage() {
  const sectorsData = await getSectorEmployeeCount();

  return (
    <div className="flex flex-col gap-10">
      <SectorHeader />
      <div className="flex justify-between gap-28">
        <MetricsCard
          title="TOTAL DE SETORES"
          metric={12}
          className="border-l-blue-dark border-l-4"
        />
        <MetricsCard
          title="COLABORADORES ATIVOS"
          metric={220}
          className="border-l-yellow-info border-l-4"
        />
        <MetricsCard
          title="TAXA DE TREINAMENTO"
          metric={formatPercent.format(8)}
          className="border-l-red border-l-4"
        />
      </div>
      <div>
        <DataTable columns={columns} data={sectorsData} />
      </div>
    </div>
  );
}
