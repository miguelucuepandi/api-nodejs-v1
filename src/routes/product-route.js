"use strict"

const express = require("express");
const router = express.Router();
const controller = require("../controllers/product-controller");

router.get("/", controller.get); 
router.get("/:slug", controller.getBySlug); 
router.get("/admin/:id", controller.getById); 
router.get("/tags/:tag", controller.getByTag); 
router.post("/", controller.post); 
router.put("/:id", controller.put); 
router.delete("/", controller.delete); 

module.exports = router;

// Explicacao do codigo acima:
// 1- Importa o módulo express e cria um roteador.
// 2- Importa o controlador de produtos (product-controller) para lidar com as operações relacionadas aos produtos.
// 3- Define as rotas para diferentes operações de produtos, associando cada rota a uma função específica do controlador:
//    - GET "/" para obter todos os produtos ativos.
//    - GET "/:slug" para obter um produto específico pelo slug.
//    - GET "/admin/:id" para obter um produto específico pelo ID (para administração).
//    - GET "/tags/:tag" para obter produtos por uma tag específica.
//    - POST "/" para criar um novo produto.
//    - PUT "/:id" para atualizar um produto existente pelo ID.
//    - DELETE "/" para excluir produtos (a implementação da exclusão não está detalhada aqui).
// 4- Exporta o roteador para ser usado em outros arquivos, permitindo que as rotas sejam acessadas a partir do aplicativo principal.   