/*
  Warnings:

  - Added the required column `visible` to the `links` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "links" ADD COLUMN     "index" SERIAL NOT NULL,
ADD COLUMN     "visible" BOOLEAN NOT NULL;
