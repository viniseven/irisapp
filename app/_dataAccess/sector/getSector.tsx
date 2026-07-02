"use server";

import { prisma } from "@/lib/prisma";

export async function getAllSector() {
  const sectors = await prisma.sector.findMany();

  return sectors;
}

export async function getFindSector(name: string) {
  const sector = await prisma.sector.findFirst({
    where: {
      name: name,
    },
  });

  return {
    name: sector?.name,
  };
}
