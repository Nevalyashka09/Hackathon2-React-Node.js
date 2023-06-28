const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  addUser(user) {
    return this.database.query(
      `insert into ${this.table} (email, password ) values (?, ?)`,
      [user.email, user.password, user.is_admin]
    );
  }
}
module.exports = UserManager;
