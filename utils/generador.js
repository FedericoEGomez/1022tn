const jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports = generadorJWT = (body) =>{
    const payload = {body};
    return jwt.sign(payload,process.env.JWT_SECRET,{
        expiresIn: '4h'
    })
}