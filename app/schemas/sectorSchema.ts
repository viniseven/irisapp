import z from "zod";

export const createSectorFormSchema = z.object({
  sector: z
    .string()
    .trim()
    .min(1, "O nome do setor é obrigatório")
    .toLowerCase(),

  managerId: z.string().optional().nullable(),
});

export type CreateSectorSchema = z.infer<typeof createSectorFormSchema>;
