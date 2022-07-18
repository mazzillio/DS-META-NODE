import { randomUUID } from "crypto";

import { ISaleDto } from "../interfaces/saleDto";

export class Sale {
  id: string;
  seller_name: string;
  visted: number;
  deals: number;
  amount: number;
  date: Date;
  constructor(propsSaleDto: ISaleDto) {
    this.id = propsSaleDto.id ?? randomUUID();
    this.seller_name = propsSaleDto.seller_name;
    this.visted = propsSaleDto.visited;
    this.deals = propsSaleDto.deals;
    this.amount = propsSaleDto.amount;
    this.date = propsSaleDto.date;
  }
}
