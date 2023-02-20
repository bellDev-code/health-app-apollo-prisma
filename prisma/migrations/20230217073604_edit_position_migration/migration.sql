/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Position` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `Position` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Position" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "timestamp" DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX "Position_userId_key" ON "Position"("userId");
