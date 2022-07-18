import { Router } from "express";

import findSales from "../../../../modules/sale/useCases/findSales";
import { middlewareError } from "../middlewares/middlewareError";

const routes = Router();
routes.use(middlewareError);
routes.get("/sales", async (req, res) => {
  return findSales().handle(req, res);
});
export { routes };
