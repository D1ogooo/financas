import express from "express";
import cors from "cors";
import { router } from "./routes/index";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

const PORT = 3000;
app.listen(PORT, () => console.log(`🌸 Server rodando na PORTA:${PORT} 🌸`));