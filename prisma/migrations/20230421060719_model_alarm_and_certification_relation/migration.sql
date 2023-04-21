-- CreateEnum
CREATE TYPE "DayOfWeek" AS ENUM ('MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY');

-- DropIndex
DROP INDEX "Certification_userId_key";

-- DropIndex
DROP INDEX "Position_userId_key";

-- CreateTable
CREATE TABLE "Alarm" (
    "id" SERIAL NOT NULL,
    "time" TEXT NOT NULL,
    "dayOfWeek" "DayOfWeek" NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Alarm_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Alarm_userId_dayOfWeek_key" ON "Alarm"("userId", "dayOfWeek");

-- AddForeignKey
ALTER TABLE "Alarm" ADD CONSTRAINT "Alarm_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
