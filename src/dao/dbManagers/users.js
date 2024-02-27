const UserModel = require("../models/user.model");

class Users {
  constructor() {
    console.log("new instance of dbManager");
  }

  async getAll() {
    let users = await UserModel.find().lean();
    return users;
  }

  async saveUser(user) {
    let result = await UserModel.create(user);
    return result;
  }
}

module.exports = Users;
