import { prisma } from "@/lib/prisma";

export async function getEmployeeWithDetails() {
  const employeeWithSectorDetails = await prisma.employee.findMany({
    select: {
      id: true,
      name: true,
      jobTitle: true,
      isActive: true,
      sector: {
        select: {
          nameSector: true,
        },
      },
    },
  });
  return employeeWithSectorDetails;
}
