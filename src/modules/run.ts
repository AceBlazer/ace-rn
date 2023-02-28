import { StdioOptions } from "child_process";
import spawn from "cross-spawn";

const run = (cmd: string, args: Array<string>, stdio?: StdioOptions) =>
  spawn.sync(cmd, args, { stdio });

export default run;
