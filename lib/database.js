const fs = require('node:fs/promises');

const test = fs.readFile('../database/data.json');

console.log({ test });

class Database {
  async init() {
    try {
      // Try to read file
    } catch (e) {
      // Can't read
    }
  }

  constructor(databaseName) {
    this.databaseName = databaseName;
    this.init();
  }
}
