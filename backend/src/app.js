import express, { Router } from "express";
import routes from "./routes/index.js";

const app = express();
routes(app);

export default app;