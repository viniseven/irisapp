import ButtonTitle from "@/components/ButtonTitle";
import TitlePage from "@/components/TitlePage";

export default function SectorPage() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <TitlePage
          title="Gerenciamento de Setores"
          description="Visualize e organize as unidades estruturais da organização."
        />

        <ButtonTitle title="Novo Setor" />
      </div>
    </div>
  );
}
