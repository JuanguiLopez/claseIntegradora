const { Router } = require("express");
const Users = require("../dao/dbManagers/users"); // con dbMongoose
//const Users = require("../dao/fileManagers/users"); // con FileSystem (fs)

const router = Router();

const manager = new Users();

router.get("/", async (req, res) => {
  let users = await manager.getAll();
  res.render("users", { users });
});

module.exports = router;
