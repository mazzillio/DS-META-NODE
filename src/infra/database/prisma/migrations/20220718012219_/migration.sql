/*
  Warnings:

  - You are about to alter the column `amount` on the `tb_sales` table. The data in that column could be lost. The data in that column will be cast from `Money` to `Decimal(65,30)`.

*/
-- AlterTable
ALTER TABLE "tb_sales" ALTER COLUMN "amount" SET DATA TYPE DECIMAL(65,30);
