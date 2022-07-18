import { SaleRepositoryPostgres } from "../../repositories/implementations/SaleRepositoryPostgres";
import { ImportSalesService } from "./importSalesService";

const salesRepository = new SaleRepositoryPostgres();
const importSales = new ImportSalesService(salesRepository);
async function importManySales() {
  await importSales.execute(
    "src/modules/sale/useCases/importSales/salesForImport.csv"
  );
}
importManySales();
