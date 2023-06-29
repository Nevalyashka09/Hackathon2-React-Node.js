const AbstractManager = require("./AbstractManager");

class RamManager extends AbstractManager {
  constructor() {
    super({ table: "rams" });
  }
}

module.exports = RamManager;
