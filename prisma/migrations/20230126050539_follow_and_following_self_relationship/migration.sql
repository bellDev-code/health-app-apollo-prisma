-- CreateTable
CREATE TABLE "_FollowersRelation" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FollowersRelation_AB_unique" ON "_FollowersRelation"("A", "B");

-- CreateIndex
CREATE INDEX "_FollowersRelation_B_index" ON "_FollowersRelation"("B");

-- AddForeignKey
ALTER TABLE "_FollowersRelation" ADD CONSTRAINT "_FollowersRelation_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FollowersRelation" ADD CONSTRAINT "_FollowersRelation_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
