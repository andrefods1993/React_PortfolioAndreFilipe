import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import emailRoutes from "./routes/emailRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import config from "config";

const port = config.get("server.port");

const app = express();
const PORT = port || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api", emailRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}`);
});
