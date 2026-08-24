"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const router = express.Router();

// CONEXÃO COM O BANCO DE DADOS
mongoose.connect("mongodb+srv://miguelucuepandi07_db_user:QWfITnuMeoMKmdzh@cluster0.mt7uesc.mongodb.net/?appName=Cluster0");

// CARREGA OS MODELS
const Product = require("./models/products");

// CARREGA AS ROTAS
const indexRoute = require("./routes/index-route");
const productRoute = require("./routes/product-route");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", indexRoute);
app.use("/products", productRoute);

module.exports = app;

