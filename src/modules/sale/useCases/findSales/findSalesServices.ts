import { AppError } from "../../../../infra/server/express/appError";
import { Sale } from "../../model/sale";
import { ISaleRepository } from "../../repositories/ISaleRepository";

export class FindSalesService {
  constructor(private salesRepository: ISaleRepository) {}
  async execute(): Promise<Sale[]> {
    try {
      const sales = await this.salesRepository.find();
      return sales;
    } catch (error) {
      throw new AppError(error as string);
    }
  }
}
