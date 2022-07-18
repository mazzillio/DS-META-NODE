/*
  Warnings:

  - Changed the type of `amount` on the `tb_sales` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "tb_sales" DROP COLUMN "amount",
ADD COLUMN     "amount" MONEY NOT NULL;
