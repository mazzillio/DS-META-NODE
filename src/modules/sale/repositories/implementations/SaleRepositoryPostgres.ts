import { Prisma } from "@prisma/client";

import { prismaClient } from "../../../../infra/database/prisma/prismaClient";
import { ICreateSale } from "../../interfaces/ICreateSale";
import { Sale } from "../../model/sale";
import { ISaleRepository } from "../ISaleRepository";

export class SaleRepositoryPostgres implements ISaleRepository {
  async create(request: ICreateSale): Promise<void> {
    const sale = new Sale(request);
    await prismaClient.sale.create({
      data: sale,
    });
  }
  async find(): Promise<Sale[]> {
    const sales = await prismaClient.sale.findMany();
    const salesReturn = sales.map((sale) => {
      const { id, amount, date, deals, seller_name, visited } = sale;
      return {
        id,
        amount: new Prisma.Decimal(amount).toNumber(),
        deals,
        seller_name,
        date,
        visited,
      };
    });
    return salesReturn;
  }
}
