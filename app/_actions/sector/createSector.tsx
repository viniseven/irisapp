"use server";

import { FormSchema } from "@/app/sector/_components/FormSectorComponent";
import { prisma } from "@/lib/prisma";

export async function createSector({ name }: FormSchema) {
  await prisma.sector.create({
    data: {
      name,
    },
  });
}
