"use strict";

require("dotenv").config(); // <--- ADICIONE AQUI NA LINHA 1

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config");
const app = express();
const router = express.Router();

// CONEXÃO COM O BANCO DE DADOS
mongoose.connect(config.connectionString); 

// CARREGA OS MODELS
const Product = require("./models/product");
const Customer = require("./models/customer");
const Order = require("./models/order");

// CARREGA AS ROTAS
const indexRoute = require("./routes/index-route");
const productRoute = require("./routes/product-route");
const customerRoute = require("./routes/customer-route");
const orderRoute = require("./routes/order-route");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", indexRoute);
app.use("/orders", orderRoute);
app.use("/customers", customerRoute);
app.use("/products", productRoute);

module.exports = app;
