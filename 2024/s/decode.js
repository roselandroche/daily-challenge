const fs = require("fs").promises;

async function decode(message_file) {
  let saved;
  try {
    const data = await fs.readFile(message_file);
    saved = data.toString().split("\n").sort();
    console.log(saved);
  } catch (error) {
    console.error(`\nError: \n${error.message}\n`);
  }
}

decode("2024/s/input.txt");
