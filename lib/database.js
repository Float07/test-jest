const fs = require('node:fs/promises');

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
    this.untilReady = this.init();
  }

  async save() {
    const contentsString = JSON.stringify(this.documents, null, 2);
    await fs.writeFile(`../database/${this.name}.json`, contentsString);
  }
}
