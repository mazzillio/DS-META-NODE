-- CreateTable
CREATE TABLE "tb_sales" (
    "id" TEXT NOT NULL,
    "seller_name" TEXT NOT NULL,
    "visted" INTEGER NOT NULL,
    "deals" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tb_sales_pkey" PRIMARY KEY ("id")
);
