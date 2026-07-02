import ButtonTitle from "@/components/ButtonAction";
import TitlePage from "@/components/TitlePage";

export default function EmployeePage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <TitlePage
          title="Colaboradores"
          description="Gerencie a base de colaboradores e status de capacitação."
        />
        <ButtonTitle title="Novo Colaborador" />
      </div>
    </div>
  );
}
