import ButtonTitle from "@/components/ButtonTitle";
import TitlePage from "@/components/TitlePage";

export default function EmployeePage() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <TitlePage
          title="Colaboradores"
          description="Gerencie a base de colaboradores e status de capacitação."
        />
        <ButtonTitle title="Novo Colaborador" />
      </div>
    </div>
  );
}
