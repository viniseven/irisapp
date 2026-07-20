-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_sectorId_fkey";

-- AlterTable
ALTER TABLE "Employee" ALTER COLUMN "sectorId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_sectorId_fkey" FOREIGN KEY ("sectorId") REFERENCES "Sector"("id") ON DELETE SET NULL ON UPDATE CASCADE;
