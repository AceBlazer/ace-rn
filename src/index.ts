import boxen from "boxen";
import figlet from "figlet";

import clone from "./modules/clone";
import install from "./modules/install";
import readLine from "./modules/readline";

import { description, msgs } from "./constants/data";
import color from "./modules/esthetic/color";
import highlight from "./modules/esthetic/highlight";
import log from "./modules/esthetic/log";

let name = process.argv[2];

const start = () => {
  if (clone(name)) {
    install(name);
    log(msgs.three + highlight(msgs.cmdStart + name + msgs.cmdEnd));
  } else {
    log(msgs.error);
  }

  process.exit();
};

const askName = () =>
  readLine.question(color(msgs.one), (answer) => {
    name = answer;
    log(msgs.twoStart + answer + msgs.twoEnd);
    readLine.close();
    start();
  });

//main
console.log(figlet.textSync("ACE - RN"));
console.log(
  boxen(description, {
    padding: 1,
    borderColor: "white",
    dimBorder: true,
  })
);

if (name) {
  log(msgs.twoStart + name + msgs.twoEnd);
  start();
} else {
  askName();
}