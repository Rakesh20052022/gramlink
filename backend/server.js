import express from "express";
import cors from "cors";
import { ENV } from "./config/env.js";
import chatRoute from "./routes/chat.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/chat", chatRoute);

app.listen(ENV.PORT, () => {
  console.log(`Server running on http://localhost:${ENV.PORT}`);
});
