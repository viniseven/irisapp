import { prisma } from "@/lib/prisma";

export async function getSectorWithDetails() {
  const sectorWithManager = await prisma.sector.findMany({
    select: {
      id: true,
      nameSector: true,
      manager: {
        select: {
          name: true,
          id: true,
        },
      },
      _count: {
        select: {
          employeers: true,
        },
      },
    },
    orderBy: {
      nameSector: "asc",
    },
  });

  return sectorWithManager;
}
