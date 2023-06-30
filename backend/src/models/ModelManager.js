const AbstractManager = require("./AbstractManager");

class ModelManager extends AbstractManager {
  constructor() {
    super({ table: "models" });
  }

  getModels() {
    return this.database.query(
      `SELECT m.name AS model_name, m.price, b.name AS brand_name FROM ${this.table} m JOIN brands b ON m.brands_id = b.brands_id`
    );
  }

  getModelsByBrand(brandId) {
    return this.database.query(
      `SELECT m.name AS model_name, m.price, b.name AS brand_name FROM ${this.table} m JOIN brands b ON m.brands_id = b.brands_id WHERE m.brands_id = ?`,
      [brandId]
    );
  }
}

module.exports = ModelManager;
