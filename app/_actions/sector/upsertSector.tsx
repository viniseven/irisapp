"use server";

import { UpsertSectorSchema } from "@/app/schemas/sectorSchema";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function upsertSector(data: UpsertSectorSchema) {
  const managerId =
    data.managerId && data.managerId.trim() !== ""
      ? data.managerId.trim()
      : null;

  try {
    await prisma.sector.upsert({
      where: {
        id: data.id || "",
      },
      update: {
        nameSector: data.sector,
        managerId: managerId,
      },
      create: {
        nameSector: data.sector,
        managerId: managerId,
      },
    });
    revalidatePath("/sector");

    if (!data.id) {
      return { success: true, message: "Setor cadastrado com sucesso" };
    }
    return { success: true, message: "Setor atualizado com sucesso" };
  } catch (error) {
    return { success: false, message: "Erro interno do servidor" };
  }
}
