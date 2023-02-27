import run from "./run";
import { url } from "../constants/data";

import os from "os";

const clone = (dest: string) => {
  const cmd = run("git", ["clone", "--depth=1", url, dest]);

  if (cmd.status == 0) {
    if (os.platform() === "win32") {
      run("rmdir", ["/s", "/q", `${dest}/.git`]);
    } else {
      run("rm", ["-rf", `${dest}/.git`]);
    }
    return true;
  }

  return false;
};

export default clone;
