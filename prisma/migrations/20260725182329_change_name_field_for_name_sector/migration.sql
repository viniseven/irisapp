/*
  Warnings:

  - You are about to drop the column `name` on the `Sector` table. All the data in the column will be lost.
  - Added the required column `nameSector` to the `Sector` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sector" DROP COLUMN "name",
ADD COLUMN     "nameSector" TEXT NOT NULL;
