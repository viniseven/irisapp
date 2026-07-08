"use client";

import { ColumnDef } from "@tanstack/react-table";
import { formSchema } from "./FormSectorComponent";
import z from "zod";

const schemaTableSector = formSchema.extend({
  quantityEmployees: z.number(),
});

type SchemaTableSector = z.infer<typeof schemaTableSector>;

export const columns: ColumnDef<SchemaTableSector>[] = [
  {
    accessorKey: "name",
    header: "NOME DO SETOR",
  },
  {
    accessorKey: "manager",
    header: "RESPONSÁVEL",
  },
  {
    accessorKey: "quantityEmployees",
    header: "QUANTIDADE DE COLABORADORES",
  },
  {
    accessorKey: "",
    header: "AÇÕES",
  },
];
