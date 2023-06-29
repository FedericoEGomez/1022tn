const bcrypt = require('bcryptjs')
const {User} = require('../models/user')
const generadorJWT = require('../utils/generador')

class UserController {
    pruebaJwt(req, res){
        const token = generadorJWT(req.body)
        res.json({token})
    }
    pasoToken(req,res){
        res.send('paso el token')
    }


    pruebaSession (req,res){
        const user = {
            id:'sdhaosudajd233762842621',
            name: 'juan',
            age: 22
        }
        req.session.user = user
        res.cookie('primeraCookie',user.id,{maxAge:120000})
        res.json(req.session)
    }
    testSession(req,res){
        res.json(req.session)
    }
    testCookie(req, res){
        res.json({
            cookie : req.cookies.sessionCookie
        })
    }
    borrarSession(req,res){
        req.session.destroy();
        res.clearCookie('primeraCookie');
        res.json({msg:'se borro todo'})
    }
    probandoHash (req, res) {
        let pass = '123456789'
        let salt = bcrypt.genSaltSync(15)
        let hash = bcrypt.hashSync(pass,salt)
        let prueba1 = bcrypt.compareSync('123456789',hash)
        let prueba2 = bcrypt.compareSync('me gusta la pizza',hash)
        res.json({hash,prueba1,prueba2})

    }
    async login (req, res) {
        try {
            const persona = await User.findOne({email:req.body.email})
            if (persona == null) {
                res.json({msg:'la contraseña o el email son invalidos'})
            }
            if (!bcrypt.compareSync(req.body.password,persona.password)) {
                res.json({msg:'la contraseña o el email son invalidos'})
            }
            const user = {
                _id: persona._id,
                name: persona.name
            }
            req.session.user = user
            if (req.body.remember) {
                res.cookie('sessionCookie',req.session.user,{maxAge:120000})
            }
            res.json({
                msg:'se creo la session'
            })
        } catch (error) {
            es.json(error)
        }
    }
    async loginToken (req, res) {
        try {
            const persona = await User.findOne({email:req.body.email})
            if (persona == null) {
                res.json({msg:'la contraseña o el email son invalidos'})
            }
            if (!bcrypt.compareSync(req.body.password,persona.password)) {
                res.json({msg:'la contraseña o el email son invalidos'})
            }
            const token = generadorJWT({id: persona._id,name: persona.name})
            
            res.json({
                msg:'se creo el token',
                token
            })
        } catch (error) {
            es.json(error)
        }
    }
    logout(req, res){
        req.session.destroy();
        res.clearCookie('sessionCookie');
        res.json({msg:'se borro la session y la cookie'})
    }
}

module.exports = new UserController