import config from "../config";
import { serverExpress } from "./express";

const PORT = config.port;
serverExpress.listen(PORT, () =>
  console.info(`Servidor rodando na porta ${PORT}`)
);
