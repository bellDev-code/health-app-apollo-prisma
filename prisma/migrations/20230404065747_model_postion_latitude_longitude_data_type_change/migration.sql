/*
  Warnings:

  - You are about to alter the column `latitude` on the `Position` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(10,6)`.
  - You are about to alter the column `longitude` on the `Position` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(10,6)`.

*/
-- AlterTable
ALTER TABLE "Position" ALTER COLUMN "latitude" SET DATA TYPE DECIMAL(10,6),
ALTER COLUMN "longitude" SET DATA TYPE DECIMAL(10,6);
