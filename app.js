"use strict";

import fs from "node:fs/promises";
import path from "node:path";
import readLine from "node:readline";
import chalk from "chalk";

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(chalk.green("1. Crear Archivo"));
console.log(chalk.red("2. Eliminar Archivo"));

rl.question(chalk.grey("Elije tu opcion: "), async (opt) => {
  if (opt === "1") {
    rl.question(chalk.gray("Nombre del archivo?: "), async (nam) => {
      const pathText = path.join("procesos", nam);

      rl.question(chalk.gray("Contenido del archivo?: "), async (content) => {
        try {
          fs.writeFile(pathText + ".txt", content);
          rl.close();
        } catch (err) {
          if (err) throw err;
        }
      });
    });
  }

  if (opt === "2") {
    rl.question(chalk.gray("Nombre del archivo a eliminar?: "), async (nam) => {
      try {
        const pathFileDelete = path.join("procesos", nam);
        fs.unlink(pathFileDelete + ".txt");
      } catch (err) {
        throw err;
      }

      rl.close();
    });
  }
});
