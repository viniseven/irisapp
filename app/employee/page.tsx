import MetricsCard from "@/components/MetricsCard";
import EmployeeHeader from "./_components/employeeHeader";
import { formatPercent } from "@/lib/utils/formatPercent";
import { Users, CircleCheck, Clock, UserRoundX } from "lucide-react";

export default function EmployeePage() {
  return (
    <div className="flex flex-col gap-10">
      <EmployeeHeader />
      <div className="flex justify-between gap-3">
        <MetricsCard
          title="Total de Colaboradores"
          value={12}
          iconBgColor="bg-gray-100"
        >
          <Users className="text-blue-dark" />
        </MetricsCard>
        <MetricsCard title="Ativos" value={220} iconBgColor="bg-green-90">
          <CircleCheck className="text-green-900" />
        </MetricsCard>
        <MetricsCard title="Afastados" value={220} iconBgColor="bg-yellow-90">
          <Clock className="text-orange-800" />
        </MetricsCard>
        <MetricsCard title="Inativos" value={220} iconBgColor="bg-red-90">
          <UserRoundX className="text-red" />
        </MetricsCard>
      </div>
      <div></div>
    </div>
  );
}
