"use strict"

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    // O schema cria automaticamente o ID do produto, então não é necessário criar um campo para o ID
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Customer", schema);

// Trim => remove os espacos nas strings

