import { Router } from "express";

import { middlewareError } from "../middlewares/middlewareError";

const routes = Router();
routes.use(middlewareError);
routes.get("/", (req, res) => res.send("Foi amigão"));
export { routes };
