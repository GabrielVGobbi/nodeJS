const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


const RestauranteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    }, 
    description: {
        type: String, 
        required: true,
    },
    url: {
        type: String, 
        required: true,
    },
    createdAt: {
        type: Date, 
        default: Date.now,
    },
    latitude: {
        type: Number,
        required: true,
    }, 
    longitude: {
        type: Number,
        required: true,
    }, 
    endereco: {
        type: String,
        required: true,
    },
    points: {
        type: String,
        required: false,
    }, 
    points: {
        type: String,
        required: false,
    }, 
    tipo: {
        type: String,
        required: false,
    }


});

RestauranteSchema.plugin(mongoosePaginate);

mongoose.model('Restaurante', RestauranteSchema);