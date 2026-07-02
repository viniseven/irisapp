import { Info } from "lucide-react";

interface InfoCardProps {
  info: string;
}
export default function InfoCard({ info }: InfoCardProps) {
  return (
    <div className="bg-blue-light flex items-center gap-2 rounded-lg p-2">
      <Info size={40} className="text-blue-dark" />
      <span className="text-text-muted text-xs">{info}</span>
    </div>
  );
}
