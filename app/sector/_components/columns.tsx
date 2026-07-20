"use client";

import DropdownActions from "@/components/DropdownActions";
import { Progress } from "@/components/ui/progress";
import { ColumnDef } from "@tanstack/react-table";
import { Building2 } from "lucide-react";

export type SectorColumns = {
  sector: string;
  employeers: number;
  trainings: number;
  progress: number;
  leader?: {
    name: string;
  };
};

export const columns: ColumnDef<SectorColumns>[] = [
  {
    accessorKey: "sector",
    header: () => (
      <div className="w-full pl-6 text-left font-semibold text-slate-500">
        Setor
      </div>
    ),
    cell: ({ row }) => {
      const sectorData = row.original;
      console.log(sectorData);
      // Fallback caso você ainda não tenha o líder vindo do banco
      const leaderName = sectorData.leader?.name || "Responsável não definido";

      return (
        <div className="flex items-center gap-3 pl-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 font-semibold text-indigo-600">
            <Building2 className="h-5 w-5" />
          </div>

          <div className="flex flex-col">
            <span className="text-sm leading-tight font-semibold text-slate-800">
              Tecnologia da Informação
            </span>
            <div className="mt-1 flex items-center gap-1.5">
              <span className="text-xs text-slate-500">{leaderName}</span>
            </div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "employeers",
    header: () => (
      <div className="text-center font-semibold text-slate-500">
        Colaboradores
      </div>
    ),
    cell: ({ row }) => {
      const count = row.getValue("employeers") as number;
      return (
        <div className="flex flex-col text-center">
          <span className="block text-sm font-bold text-slate-800">86</span>
          <div>
            <span className="text-xs text-slate-400">colaboradores</span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "trainings",
    header: () => (
      <div className="text-center font-semibold text-slate-500">
        Treinamentos
      </div>
    ),
    cell: ({ row }) => {
      const count = row.getValue("trainings") as number;
      return (
        <div className="flex flex-col text-center">
          <span className="text-sm font-bold text-slate-800">10</span>
          <div>
            <span className="text-xs text-slate-400">treinamentos</span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "progress",
    header: () => (
      <div className="pl-4 text-center font-semibold text-slate-500">
        Progresso
      </div>
    ),
    cell: ({ row }) => {
      const value = row.getValue("progress") as number;

      return (
        <div className="flex flex-col gap-1.5 pl-4">
          <div className="flex items-center justify-between text-xs">
            <span className="font-medium text-slate-400">Conclusão</span>
            <span className="font-bold text-slate-800">100%</span>
          </div>
          <Progress value={33} className="bg-green-600" />
        </div>
      );
    },
  },
  {
    id: "actions",
    header: () => <div />,
    cell: ({ row }) => {
      return (
        <div className="text-right">
          <DropdownActions />
        </div>
      );
    },
  },
];
