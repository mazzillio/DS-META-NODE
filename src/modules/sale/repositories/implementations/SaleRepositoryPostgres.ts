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
}
