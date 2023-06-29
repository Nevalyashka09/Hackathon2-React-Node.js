class AbstractManager {
  constructor({ table }) {
    this.table = table;
  }

  findAll() {
    return this.database.query(`select * from  ${this.table}`);
  }

  findById(id) {
    return this.database.query(
      `select * from  ${this.table} where ${this.table}_id = ?`,
      [id]
    );
  }

  findByEmail(mail) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE email = ?`, [
      mail,
    ]);
  }

  delete(id) {
    return this.database.query(
      `delete from ${this.table} where ${this.table}_id = ?`,
      [id]
    );
  }

  setDatabase(database) {
    this.database = database;
  }
}

module.exports = AbstractManager;
