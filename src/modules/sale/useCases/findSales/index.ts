import { SaleRepositoryPostgres } from "../../repositories/implementations/SaleRepositoryPostgres";
import { FindSalesController } from "./findSalesController";
import { FindSalesService } from "./findSalesServices";

export default (): FindSalesController => {
  const repository = new SaleRepositoryPostgres();
  const findSalesService = new FindSalesService(repository);
  const findSalesController = new FindSalesController(findSalesService);
  return findSalesController;
};
