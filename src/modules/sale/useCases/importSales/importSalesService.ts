import { parse } from "csv-parse";
import fs from "fs";
import { resolve } from "path";

import { ICreateSale } from "../../interfaces/ICreateSale";
import { ISaleRepository } from "../../repositories/ISaleRepository";

export class ImportSalesService {
  constructor(private saleRepository: ISaleRepository) {}
  loadSales(filepath: string): Promise<ICreateSale[]> {
    return new Promise((resolve, reject) => {
      const fileStream = fs.createReadStream(filepath);
      const parseFile = parse();
      fileStream.pipe(parseFile);
      const sales: ICreateSale[] = [];
      parseFile
        .on("data", async (line) => {
          const [seller_name, visited, deals, amount, date] = line;
          sales.push({
            seller_name,
            visited: Number(visited),
            deals: Number(deals),
            amount: parseFloat(amount),
            date: new Date(date),
          });
        })
        .on("end", () => {
          resolve(sales);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }
  async execute(filepath: string) {
    try {
      const sales = await this.loadSales(filepath);
      sales.map(async (sale) => {
        await this.saleRepository.create(sale);
      });
    } catch (error) {
      console.log(error);
    }
  }
}
