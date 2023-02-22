import fs from "fs/promises";
import { resolve } from "path";


export const getFiles = async () => {
  const imgs = await fs.readdir(resolve(__dirname, "..", "public", "imgs"));
  return { imgs };
};
