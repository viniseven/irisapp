import MetricsCard from "@/components/MetricsCard";
import EmployeeHeader from "./_components/employeeHeader";
import { formatPercent } from "@/lib/utils/formatPercent";

export default function EmployeePage() {
  return (
    <div className="flex flex-col gap-10">
      <EmployeeHeader />
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
      <div></div>
    </div>
  );
}
