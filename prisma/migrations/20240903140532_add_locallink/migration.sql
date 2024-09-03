/*
  Warnings:

  - A unique constraint covering the columns `[local]` on the table `links` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "links" ADD COLUMN     "local" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "links_local_key" ON "links"("local");
