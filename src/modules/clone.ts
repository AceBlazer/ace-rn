import run from "./run";
import { url } from "../constants/data";
import fs from "fs-extra";
const path = require("path");

const clone = async (dest: string) => {
  const cmd = run("git", ["clone", "--depth=1", url, dest], "ignore");

  if (cmd.status == 0) {
    try {
      await fs.remove(path.join(dest, ".git"));
      return true;
    } catch (err) {
      return false;
    }
  }

  return false;
};

export default clone;
