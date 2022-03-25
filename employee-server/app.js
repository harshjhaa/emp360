const express = require("express");
const app = express();
const { loadUser } = require("./user_model");
var cors = require("cors");
// const data = require("./server/data.json");

app.use(cors());
const port = 5050;

app.get("/", (request, response) => response.send("Welcome"));

app.get("/user", (request, response) => {
  response.send(loadUser());
});

app.listen(port, () => console.log("server running at port: ", port));
