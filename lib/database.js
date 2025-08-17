const fs = require('node:fs/promises');

const test = fs.readFile('../database/data.json');

console.log({ test });

class Database {
  async init() {
    try {
      // Try to read file
      const contents = await fs.readFile(`../database/${this.name}.json`, 'utf-8');
      this.documents = JSON.parse(contents);
    } catch (e) { 
      // Can't read
    }
  }

  constructor(databaseName) {
    this.name = databaseName;
    this.documents = [];
    this.init();
  }
}
