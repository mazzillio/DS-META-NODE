import cors from "cors";
import express from "express";

const serverExpress = express();
serverExpress.use(cors);

export { serverExpress };
