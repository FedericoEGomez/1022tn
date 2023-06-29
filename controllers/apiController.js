const {SmartPhone} = require('../models/celulares')


const apiController = {
    async info (req, res) {
        const list = await SmartPhone.find();
        res.status(200).json(list)
    },
    async buscarPorId (req, res) {
        console.log('estoy en el controlador')
        const busqueda = await SmartPhone.findById(req.params.id);
        res.status(200).json(busqueda)
    },
    async buscarPorModelo (req, res) {
        const busqueda = await SmartPhone.findOne({modelo: req.params.modelo});
        res.status(200).json(busqueda)
    },
    async buscarPorMarca (req, res) {
        const list = await SmartPhone.find(req.query);
        res.status(200).json(list)
    },

    async crear (req,res){
       try {
            const newSmartPhone = new SmartPhone(req.body);
            await newSmartPhone.save();
            res.status(201).json(newSmartPhone)
       } catch (error) {
            res.status(400).json(error)
       }
    },
    async editar (req,res){
       try {
            await SmartPhone.findByIdAndUpdate(req.params.id, req.body)
            const busqueda = await SmartPhone.findById(req.params.id)
            res.json(busqueda)
       } catch (error) {
            res.json(error)
       }
    },
    async eliminar (req,res){
        await SmartPhone.findByIdAndDelete(req.params.id)
        res.status(204).json()
    }
    
}

module.exports = apiController