/*
  Warnings:

  - You are about to alter the column `amount` on the `tb_sales` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.

*/
-- AlterTable
ALTER TABLE "tb_sales" ALTER COLUMN "amount" SET DATA TYPE DECIMAL(10,2);
