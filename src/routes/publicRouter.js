import ejs from "ejs";
import express from "express";
import { resolve } from "path";


const publicRouter = express();

publicRouter.use(express.static(resolve(__dirname, "..", "public")));
publicRouter.set("views", resolve(__dirname, "..", "public"));
publicRouter.engine("html", ejs.renderFile);
publicRouter.set("views engine", "html");

publicRouter.post("/", async (req, res) => {
  return res.render("index.html");
});

publicRouter.use((req, res, next) => {
  res.status(404);
  res.render("404.html");
});

export { publicRouter };
