/*
  Warnings:

  - Added the required column `src` to the `Coffee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Coffee" ADD COLUMN     "src" TEXT NOT NULL;
