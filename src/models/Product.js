const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


const ProductSchema = new mongoose.Schema({
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
        type: String,
        required: true,
    }, 
    longitude: {
        type: String,
        required: true,
    }, 
    endereco: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: false,
    } 

});

ProductSchema.plugin(mongoosePaginate);

mongoose.model('Product', ProductSchema);