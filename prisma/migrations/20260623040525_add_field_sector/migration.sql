/*
  Warnings:

  - Added the required column `createdAt` to the `Sector` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Sector` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sector" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
