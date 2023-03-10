import run from "./run";

const install = (dest: string) => {
  run("yarn", ["install", "--cwd", dest], "inherit");
};

export default install;
