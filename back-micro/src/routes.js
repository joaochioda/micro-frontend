const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/UserController");

routes.get("/", (req, res) => {
  return res.json("hello world server");
});

routes.post("/user", UserController.store);
routes.get("/users", UserController.index);
routes.get("/user/:name", UserController.show);

module.exports = routes;
