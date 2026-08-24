"use strict"

const express = require("express");
const router = express.Router();

const route = router.get("/", (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});

module.exports = router;

// Explicacao do codigo acima:
// 1- Importa o módulo express e cria um roteador.
// 2- Define uma rota GET para o caminho raiz ("/") que retorna um objeto JSON com informações sobre a API, incluindo o título e a versão.
// 3- Exporta o roteador para ser usado em outros arquivos. 