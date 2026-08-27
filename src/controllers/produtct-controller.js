"use strict"

const mongoose = require("mongoose");
const Product = mongoose.model("Product");
const ValidationContract = require("../validator/fluent-validator");
const repository = require("../repositories/product-repository");

exports.get = async(req, res, nex) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(400).send({
            message: "Falha ao processar sua requisição"
        });
    }
}

exports.getBySlug = async (req, res, nex) => {
    try { 
        var data = await repository.getBySlug(req.params.slug);
        res.status(200).send(data);
    } catch (e) {
        res.status(400).send({
            message: "Falha ao processar sua requisição"
        });
    }
}; 

exports.getById = async (req, res, nex) => {
    try {
        var data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(400).send({
            message: "Falha ao processar sua requisição"
        });
    }
};

exports.getByTag = async (req, res, nex) => {
    try {
        var data = await repository.getByTag(req.params.tag);
        res.status(200).send(data);
    } catch (e) {
        res.status(400).send({
            message: "Falha ao processar sua requisição"
        });
    }
};

exports.post = async (req, res, nex) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.title, 3, "O título deve conter pelo menos 3 caracteres");
    contract.hasMinLen(req.body.slug, 3, "O slug deve conter pelo menos 3 caracteres");
    contract.hasMinLen(req.body.description, 3, "A descrição deve conter pelo menos 3 caracteres");

    // Se os dados forem inválidos
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }
    try {
        await repository.create(req.body)
        res.status(201).send({
            message: "Produto cadastrado com sucesso!" 
        });
    } catch (e) {
        res.status(400).send({
            message: "Falha ao cadastrar o produto", 
            data: e 
        });
    }
}; 

exports.put = async (req, res, nex) => {
    try {
        await repository.update(req.params.id, req.body);
        res.status(200).send({
            message: "Produto atualizado com sucesso!" 
        });
    } catch (e) {
        res.status(400).send({
            message: "Falha ao atualizar o produto", 
            data: e 
        });
    }
};

exports.delete = async (req, res, nex) => {
    try {
        await repository.delete(req.body.id);
        res.status(200).send({
            message: "Produto removido com sucesso!" 
        });
    } catch (e) {
        res.status(400).send({
            message: "Falha ao remover o produto", 
            data: e 
        });
    }
};

/*
    O metodo find() retorna um array de objetos, enquanto o metodo findOne() retorna apenas um objeto.
*/

// Explicacao do codigo acima:
// 1- Importa o módulo mongoose e o modelo Product.
// 2- Define a função get para buscar todos os produtos ativos, retornando apenas os campos title, price e slug.
// 3- Define a função getBySlug para buscar um produto específico pelo slug, retornando os campos title, description, price, slug e tags.
// 4- Define a função getByTag para buscar produtos por uma tag específica, retornando os campos title, description, price, slug e tags.
// 5- Define a função getById para buscar um produto pelo seu ID.