/*
  Warnings:

  - A unique constraint covering the columns `[managerId]` on the table `Sector` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Sector" ADD COLUMN     "managerId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Sector_managerId_key" ON "Sector"("managerId");

-- AddForeignKey
ALTER TABLE "Sector" ADD CONSTRAINT "Sector_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;
