const fs = require("fs");
const filePath = `${__dirname}/files/users.json`;

class Users {
  static id = 0;

  constructor() {
    console.log("new instance Users");
  }

  async getAll() {
    if (fs.existsSync(filePath)) {
      let data = await fs.promises.readFile(filePath, "utf8");
      return JSON.parse(data);
    } else {
      return [];
    }
  }

  async saveUser(user) {
    user.id = ++Users.id;
    let users = await this.getAll();

    users.push(user);
    await fs.promises.writeFile(filePath, JSON.stringify(users, null, "\t"));
  }
}

module.exports = Users;
