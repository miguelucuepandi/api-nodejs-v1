"use strict"

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    // O schema cria automaticamente o ID do produto, então não é necessário criar um campo para o ID
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: [true, "O slug é obrigatório"],
        trim: true,
        index: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    tags: [{
        type: String,
        required: true
    }]
});

module.exports = mongoose.model("Product", schema);

// Trim => remove os espacos nas strings
/*
    A estrutura final sera

    {
        title: "Produto 1",
        slug: "produto-1",
        description: "Descricao do produto 1",
        price: 10.00,
        active: true,
        tags: ["tag1", "tag2"]
    }

    exemplo de como sera enviado
    {
        "title": "Produto 1",
        "slug": "produto-1",
        "description": "Descricao do produto 1",
        "price": 10.00,
        "active": true,
        "tags": ["tag1", "tag2"]
    }   
*/

// Explicacao do codigo acima:
// 1- Importa o módulo mongoose e cria um esquema (schema) para o modelo Product.
// 2- Define os campos do modelo Product, incluindo title, slug, description, price, active e tags, com suas respectivas validações e tipos de dados.
// 3- Exporta o modelo Product para ser usado em outros arquivos.   