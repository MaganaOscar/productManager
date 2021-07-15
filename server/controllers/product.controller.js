const Product = require("../models/product.model");

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json({ message: "Something went wrong", error: err}));
}

module.exports.createNewProduct = (req, res) => {
    const {title, price, description} = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => res.json(product))
        .catch(err => res.json({ message: "Something went wrong", error: err}));
}

module.exports.getProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json({message:"Something went wrong", error: err}));
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedPerson => res.json(updatedPerson))
        .catch(err => res.json({message:"Something went wrong", error: err}));
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json({message:"Something went wrong", error: err}));
}