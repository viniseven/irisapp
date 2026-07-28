"use server";

import { getFindEmployee } from "@/app/_dataAccess/employee/getEmployee";
import { FormSchema } from "@/app/employee/_components/upsertDialogContent";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createEmployee(data: FormSchema) {
  try {
    const resultFindSector = await getFindEmployee(data.badgeId);

    if (resultFindSector) {
      return {
        success: false,
        message: "Já existe um colaborador com mesmo número de crachá",
      };
    }

    await prisma.employee.create({
      data: {
        name: data.name,
        sectorId: data.sector,
        jobTitle: data.jobTitle,
        badgeId: data.badgeId,
        isActive: data.isActive,
      },
    });
    revalidatePath("/employee");
    return { success: true, message: "Colaborador cadastrado com sucesso" };
  } catch (error) {
    return { success: false, message: "Erro interno do servidor" };
  }
}
