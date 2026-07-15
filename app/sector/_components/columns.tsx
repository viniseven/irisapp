"use client";

import { ColumnDef } from "@tanstack/react-table";

export type SectorColumns = {
  sector: string;
  employeers: number;
  trainings: number;
  progress: number;
};

export const columns: ColumnDef<SectorColumns>[] = [
  {
    accessorKey: "sector",
    header: "Setor",
  },
  {
    accessorKey: "employeers",
    header: "Colaboradores",
  },
  {
    accessorKey: "trainings",
    header: "Treinamentos",
  },
  {
    accessorKey: "progress",
    header: "Progresso",
  },
  {
    accessorKey: "",
    header: "Acções",
  },
];
