import { Request, Response } from "express";

import { FindSalesService } from "./findSalesServices";

export class FindSalesController {
  constructor(private findSalesService: FindSalesService) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const sales = await this.findSalesService.execute();
    return res.json(sales);
  }
}
