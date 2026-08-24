"use strict"

const mongoose = require("mongoose");
const Product = mongoose.model("Product");

exports.get = (req, res, nex) => {
    Product
    .find({
        active: true
    }, "title price slug") // Seleciona apenas os campos especificados
    .then(data => {
        res.status(200).send(data);
    })
    .catch(e => {
        res.status(400).send({
            message: "Falha ao processar sua requisição"
        });
    });
};

exports.getBySlug = (req, res, nex) => {
    Product
    .findOne({
        slug: req.params.slug,
        active: true
    }, "title description price slug tags") // Seleciona apenas os campos especificados
    .then(data => {
        res.status(200).send(data);
    })
    .catch(e => {
        res.status(400).send({
            message: "Falha ao processar sua requisição"
        });
    });
};

exports.getByTag = (req, res, nex) => {
    Product
    .find({
        tags: req.params.tag
    }, "title description price slug tags") // Seleciona apenas os campos especificados
    .then(data => {
        res.status(200).send(data);
    })
    .catch(e => {
        res.status(400).send({
            message: "Falha ao processar sua requisição"
        });
    });
};

exports.getById = (req, res, nex) => {
    Product
    .findById(req.params.id)
    .then(data => {
        res.status(200).send(data);
    })
    .catch(e => {
        res.status(400).send({
            message: "Falha ao processar sua requisição"
        });
    });
};

exports.post = (req, res, nex) => {
    var product = new Product(req.body);
    product
    .save()
    .then(x => {
        res.status(201).send({ message: "Produto cadastrado com sucesso!" });
    })
    .catch(e => {
        res.status(400).send({ 
            message: "Falha ao cadastrar o produto", 
            data: e 
        });
    });
}; 

exports.put = (req, res, nex) => {
    Product
    .findByIdAndUpdate(req.params.id, {
        $set: {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            slug: req.body.slug
        }
    })
    .then(x => {
        res.status(200).send({
            message: "Produto atualizado com sucesso!" 
        });
    })
    .catch(e => {
        res.status(400).send({
            message: "Falha ao atualizar o produto", 
            data: e 
        });
    });
};

exports.delete = (req, res, nex) => {
    Product
    .findByIdAndDelete(req.body.id)
    .then(x => {
        // Se 'x' for null, significa que o ID é válido mas não existe no banco
        if (!x) {
            return res.status(404).send({
                message: "Produto não encontrado!"
            });
        }
        res.status(200).send({
            message: "Produto removido com sucesso!" 
        });
    })
    .catch(e => {
        res.status(400).send({
            message: "Falha ao remover o produto", 
            data: e 
        });
    });
};

/*
    O metodo find() retorna um array de objetos, enquanto o metodo findOne() retorna apenas um objeto.
*/