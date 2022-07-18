import { ICreateSale } from "../interfaces/ICreateSale";
import { Sale } from "../model/sale";

export interface ISaleRepository {
  create(request: ICreateSale): Promise<void>;
  find(): Promise<Sale[]>;
}
