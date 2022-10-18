const { findOneAndUpdate } = require('../models/product');
const ProductModel = require('../models/product');

async function get(req, res) {
    const { id } = req.params;
    const obj = id ? { _id: id } : null;

    const products = await ProductModel.find(obj);

    res.send(
        {
            message: 'success',
            products
        }
    );
}

function post(req, res) {
    const { name, brand, price } = req.body;

    const product = ProductModel({
        name, brand, price
    })

    product.save();

    res.send({
        message: 'success'
    })
}

async function put(req, res) {
    const { id } = req.params || req.query;

    const product = await ProductModel.findOneAndUpdate({ _id: id }, req.body, { new: true });

    res.send({
        message: 'success',
        product
    })
}

async function remove(req, res) {

    const { id } = req.params;

    const remove = await ProductModel.deleteOne({ _id: id });

    if (remove.deletedCount === 1) {
        res.send({
            message: 'success'
        })
    }
}

module.exports = {
    get,
    post,
    put,
    remove,
}