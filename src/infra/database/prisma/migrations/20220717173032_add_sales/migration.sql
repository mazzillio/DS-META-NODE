-- CreateTable
CREATE TABLE "tb_sales" (
    "id" TEXT NOT NULL,
    "seller_name" TEXT NOT NULL,
    "visted" DECIMAL(65,30) NOT NULL,
    "deals" BOOLEAN NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tb_sales_pkey" PRIMARY KEY ("id")
);
