const http = require("http");
// const https = require("https");
const express = require("express");
// const fs = require("fs");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
// const path = require("path");
// const moment = require("moment");
// const schedule = require("node-schedule");
const dotenv = require("dotenv");
const server = http.createServer(app);

dotenv.config();
app.use(bodyParser.json());

app.use(cors());

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}

app.post("/api/CreateInvoice", (req, res) => {
  console.log(req.body);
  res.send("non rout");
  //   res.sendFile(path.join(__dirname + "/Client/build/index.html"));
});

app.get("*", (req, res) => {
  console.log(req.body);
  res.send("non rout");
  //   res.sendFile(path.join(__dirname + "/Client/build/index.html"));
});

server.listen(port, () => {
  console.log("Example app listening on port " + port);
});
