const AbstractManager = require("./AbstractManager");

class SmartphoneManager extends AbstractManager {
  constructor() {
    super({ table: "smartphones" });
  }

  addUser(smartphone) {
    return this.database.query(
      `insert into ${this.table} (brand, model, price ) values (?, ?, ?)`,
      [smartphone.brand, smartphone.model, smartphone.price]
    );
  }
}
module.exports = SmartphoneManager;
