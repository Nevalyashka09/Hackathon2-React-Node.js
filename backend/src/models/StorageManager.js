const AbstractManager = require("./AbstractManager");

class StorageManager extends AbstractManager {
  constructor() {
    super({ table: "storages" });
  }
}

module.exports = StorageManager;
