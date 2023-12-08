/*
  Warnings:

  - You are about to drop the column `deliveryTime` on the `Gigs` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Gigs` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Gigs" DROP COLUMN "deliveryTime",
DROP COLUMN "price";
