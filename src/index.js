import cors from "cors";
import express from "express";


import { getFiles } from "./App/getFiles";

import { publicRouter } from "./routes/publicRouter";


const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/allGames", async (req, res) => {
  const allGames = await getFiles();

  return res.json(allGames);
});

app.use(publicRouter);

app.listen(3000, () => console.log("server running in port 3000"));
