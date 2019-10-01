// Listagem 
const mongoose = require('mongoose');

const Restaurante = mongoose.model('Restaurante');

module.exports = {
    async index(req, res){
        const { page = 1 } = req.query;


        const restaurantes = await Restaurante.paginate({ }, { page, limite: 10});

        return res.json(restaurantes);
    },

    async show(req, res){
        const restaurante = await Restaurante.findById(req.params.id);

        return res.json(restaurante);
    },

    async search(req, res){
        const { tipo = '' } = req.query;

        const restaurante = await Restaurante.find({ title: { tipo} });
    
        return res.json(restaurante);
    },

    async update(req, res){
        const restaurante = await Restaurante.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(restaurante);
    },

    async destroy(req, res){
        await Restaurante.findByIdAndRemove(req.params.id);

        return res.send();
    },

    async store(req, res){
        const restaurante = await Restaurante.create(req.body);
        return res.json(restaurante);
    },
};