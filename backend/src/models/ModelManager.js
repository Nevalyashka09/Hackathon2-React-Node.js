const AbstractManager = require("./AbstractManager");

class ModelManager extends AbstractManager {
  constructor() {
    super({ table: "models" });
  }

  getModels() {
    return this.database.query(
      `SELECT * FROM ${this.table} INNER JOIN brands ON ${this.table}.brands_id = brands.brands_id`
    );
  }
}

module.exports = ModelManager;
