import cors from "cors";
import express from "express";

import { routes } from "./routes/index.routes";

const serverExpress = express();
serverExpress.use(cors());
serverExpress.use(express.json());
serverExpress.use(routes);

export { serverExpress };
