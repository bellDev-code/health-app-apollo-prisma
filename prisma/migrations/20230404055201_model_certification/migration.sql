-- AlterTable
ALTER TABLE "Position" ADD COLUMN     "gymTime" TIMESTAMP(3),
ADD COLUMN     "gymname" TEXT;

-- CreateTable
CREATE TABLE "Certification" (
    "id" SERIAL NOT NULL,
    "certification" BOOLEAN NOT NULL DEFAULT false,
    "positionId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Certification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Certification_userId_key" ON "Certification"("userId");

-- AddForeignKey
ALTER TABLE "Certification" ADD CONSTRAINT "Certification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Certification" ADD CONSTRAINT "Certification_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "Position"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
