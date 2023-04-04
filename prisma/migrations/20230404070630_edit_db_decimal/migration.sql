/*
  Warnings:

  - You are about to alter the column `latitude` on the `Position` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,6)` to `Decimal(10,10)`.
  - You are about to alter the column `longitude` on the `Position` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,6)` to `Decimal(10,10)`.

*/
-- AlterTable
ALTER TABLE "Position" ALTER COLUMN "latitude" SET DATA TYPE DECIMAL(10,10),
ALTER COLUMN "longitude" SET DATA TYPE DECIMAL(10,10);
