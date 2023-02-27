const spawn = require("cross-spawn");

const run = (cmd: string, args: Array<string>) =>
  spawn.sync(cmd, args, { stdio: "inherit" });

export default run;
