"use server";

import { getFindSector } from "@/app/_dataAccess/sector/getSector";
import { FormSchema } from "@/app/sector/_components/formSectorComponent";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createSector(data: FormSchema) {
  try {
    const resultFindSector = await getFindSector(data.sector);

    if (resultFindSector) {
      return { success: false, message: "Já existe um setor com este nome" };
    }

    await prisma.sector.create({
      data: {
        name: data.sector,
        managerId: data.managerId,
      },
    });
    revalidatePath("/sector");
    return { success: true, message: "Setor cadastrado com sucesso" };
  } catch (error) {
    return { success: false, message: "Erro interno do servidor" };
  }
}
