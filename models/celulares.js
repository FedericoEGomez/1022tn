const {Schema, model} = require('mongoose');

const schema = new Schema({
    marca: {
        type: String, 
        required: true
    },
    modelo: {
        type: String, 
        required: true,
        unique: true
    },
    procesador: {
        type: String, 
        required: true
    }, 
    camaras: {
        type: String, 
        required: true
    },
    almacenamiento: {
        type: String, 
        required: true
    },
    ram: {
        type: String, 
        required: true
    },
    precio: {
        type: Number, 
        required: true
    },
})

const SmartPhone = model('SmartPhone', schema);
module.exports = { SmartPhone }