import z from "zod";

export const upsertSectorFormSchema = z.object({
  id: z.string().optional(),
  sector: z
    .string()
    .trim()
    .min(1, "O nome do setor é obrigatório")
    .toLowerCase(),

  managerId: z.string().optional(),
});

export type UpsertSectorSchema = z.infer<typeof upsertSectorFormSchema>;
