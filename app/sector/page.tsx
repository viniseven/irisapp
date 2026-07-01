import DialogComponentButton from "@/components/DialogComponentButton";
import TitlePage from "@/components/TitlePage";

export default function SectorPage() {
  return (
    <div>
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
    </div>
  );
}
