import { ICreateSale } from "../interfaces/ICreateSale";

export interface ISaleRepository {
  create(request: ICreateSale): Promise<void>;
}
