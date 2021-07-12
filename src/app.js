require("dotenv").config();
const express = require("express");
const consign = require("consign")
const routes = require("./routes/pedidos");
const bodyParser = require("body-parser");
const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(routes)

consign()
    .include('../routes')
    .then('./src/controllers')
    .into(app);

module.exports = app;