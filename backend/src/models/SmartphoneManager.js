const AbstractManager = require("./AbstractManager");

class SmartphoneManager extends AbstractManager {
  constructor() {
    super({ table: "smartphones" });
  }

  getSmartphonesByBrand(brand) {
    return this.database.query(`SELECT * FROM smartphones WHERE brand = ?`, [
      brand,
    ]);
  }

  getSmartphonesByModel(model) {
    return this.database.query(`SELECT * FROM smartphones WHERE model = ?`, [
      model,
    ]);
  }
}

module.exports = SmartphoneManager;
