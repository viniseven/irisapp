"use server";

import { FormSchema } from "@/app/sector/_components/formSectorComponent";
import { prisma } from "@/lib/prisma";

export async function createSector({ name }: FormSchema) {
  await prisma.sector.create({
    data: {
      name,
    },
  });
}
