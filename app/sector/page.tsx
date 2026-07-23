import { getAllSector } from "../_dataAccess/sector/getSector";
import MetricsCard from "@/components/MetricsCard";
import { Building2, Flame, GraduationCap, TrendingUp } from "lucide-react";
import SectorHeader from "./_components/sectorHeader";
import { DataTable } from "./_components/dataTable";
import { columns } from "./_components/columns";
import { getSectorWithDetails } from "../_dataAccess/sector/getSectorWithDetails";

export default async function SectorPage() {
  const dataSectorsWithDetails = await getSectorWithDetails();

  return (
    <div className="flex flex-col gap-10">
      <SectorHeader />
      <div className="flex justify-between gap-3">
        <MetricsCard
          title="Total de Setores"
          value={12}
          iconBgColor="bg-gray-100"
        >
          <Building2 className="text-blue-dark" />
        </MetricsCard>
        <MetricsCard
          title="Setor com maior engajamento"
          value="Tecnologia da Informação"
          iconBgColor="bg-orange-90"
        >
          <Flame className="text-orange-800" />
        </MetricsCard>
        <MetricsCard
          title="Média de conclusão"
          value={220}
          iconBgColor="bg-green-90"
        >
          <TrendingUp className="text-green-900" />
        </MetricsCard>
        <MetricsCard
          title="Treinamentos ativos"
          value={220}
          iconBgColor="bg-red-90"
        >
          <GraduationCap className="text-red" />
        </MetricsCard>
      </div>
      <div>
        <DataTable columns={columns} data={dataSectorsWithDetails} />
      </div>
    </div>
  );
}
