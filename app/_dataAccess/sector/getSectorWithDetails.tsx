import { prisma } from "@/lib/prisma";

export async function getSectorWithDetails() {
  const sectorWithManager = await prisma.sector.findMany({
    select: {
      id: true,
      name: true,
      manager: {
        select: {
          name: true,
        },
      },
      _count: {
        select: {
          employeers: true,
        },
      },
    },
    orderBy: {
      name: "asc",
    },
  });

  return sectorWithManager;
}
