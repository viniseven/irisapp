"use server";

import { FormSchema } from "@/app/sector/_components/FormSectorComponent";
import { db } from "@/lib/prisma";

export async function createSector({ name }: FormSchema) {
  await db.sector.create({
    data: {
      name,
    },
  });
}
