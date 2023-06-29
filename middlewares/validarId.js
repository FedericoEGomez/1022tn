const {SmartPhone} = require('../models/celulares')

const validarID = async (req, res, next)=> {
    try {
        const busqueda = await SmartPhone.findById(req.params.id);
        console.log('estoy en el middleware')
        if (busqueda !== null) {
            next()
        } else {
            res.status(401).json({
                msg: "el id ingresado es invalido " + req.params.id
            }) 
        } 
    } catch (error) {
        res.status(401).json(error) 
    }
}

module.exports = { validarID }