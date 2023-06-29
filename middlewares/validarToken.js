const jwt = require('jsonwebtoken')
const {User} = require('../models/user')
require('dotenv').config()

module.exports = validarToken= (req, res,next) =>{
    const token = req.header('JWTtoken')
    if (!token) {
        return res.json({msg:' no hay token en tu peticion '})
    }
    try {
        const {body} = jwt.verify(token,process.env.JWT_SECRET)
        const user = User.findById(body.id)
        if (!user) {
            return res.json({msg: 'token no valido'})
        }
        next()
        
    } catch (error) {
        res.json(error)
    }
}