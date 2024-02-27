const express = require("express");
const usersRouter = require("./routes/users.router");
const viewsRouter = require("./routes/views.router");
const handlebars = require("express-handlebars");
const mongoose = require("mongoose");

const port = 8080;

const app = express();

//-- Database connection --//
mongoose
  .connect(
    `mongodb+srv://juanguilopezh:d9XI13lSGDhdNmth@coderhcluster.xwnfwp2.mongodb.net/integracion`
  )
  .then(() => {
    console.log("connected succesfully");
  });

//-- middlewares --//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//--views engine--//
app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set("view engine", "handlebars");

//-- asigna endpoints a routers --//
app.use("/api/users", usersRouter);
app.use("/", viewsRouter);

//-- endpoints --//
app.get("/helloworld", (req, res) => {
  res.send("hello world!");
});

app.listen(port, () => console.log(`up and running on port ${port}`));
