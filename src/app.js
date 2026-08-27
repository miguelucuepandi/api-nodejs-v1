"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const router = express.Router();

// CONEXÃO COM O BANCO DE DADOS
mongoose.connect("mongodb+srv://miguelucuepandi07_db_user:QWfITnuMeoMKmdzh@cluster0.mt7uesc.mongodb.net/?appName=Cluster0");

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


// Explicacao do codigo acima:
// 1- Importa os módulos necessários: express, body-parser e mongoose.
// 2- Cria uma instância do aplicativo Express e um roteador.
// 3- Conecta-se ao banco de dados MongoDB usando o mongoose.
// 4- Carrega os modelos de dados (neste caso, o modelo Product).
// 5- Carrega as rotas do aplicativo (indexRoute e productRoute).
// 6- Configura o middleware body-parser para processar requisições JSON e URL-encoded.
// 7- Define as rotas do aplicativo, associando os caminhos às rotas carregadas.
// 8- Exporta o aplicativo para ser usado em outros arquivos (como o servidor). 

