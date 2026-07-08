"use server";

import { prisma } from "@/lib/prisma";

export async function getAllSector() {
  const sectors = await prisma.sector.findMany();

  return sectors;
}

export async function getFindSector(name: string) {
  return await prisma.sector.findFirst({
    where: {
      name,
    },
  });
}

export async function getSectorEmployeeCount() {
  const sectors = await prisma.sector.findMany({
    select: {
      name: true,
      _count: {
        select: {
          employeers: true,
        },
      },
    },
  });

  return sectors.map((sector) => ({
    name: sector.name,
    quantityEmployees: sector._count.employeers,
  }));
}
