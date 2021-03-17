//importando a biblioteca 'mongoose'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//criando o 'schema'/'model'
const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Nome é um campo obrigatório!']
    },
    brand: {
        type: String,
    },
    price: {
        type: String,
    }
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;