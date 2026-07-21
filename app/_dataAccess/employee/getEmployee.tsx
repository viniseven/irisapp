"use server";

import { prisma } from "@/lib/prisma";

export async function getAllEmployee() {
  const employeers = await prisma.employee.findMany();

  return employeers;
}

export async function getFindEmployee(badgeId: number) {
  return await prisma.employee.findFirst({
    where: {
      badgeId,
    },
  });
}
