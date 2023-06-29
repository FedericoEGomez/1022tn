const {check}= require('express-validator')

const checks = [
    check('email')
        .notEmpty().withMessage('el campo email es requerido')
        .isString().withMessage('el campo email tiene que ser tipo string')
        .isEmail().withMessage('el campo tiene que ser un email'),
    check('password')
        .notEmpty().withMessage('el campo password es requerido')
        .isString().withMessage('el campo password tiene que ser tipo string'),
]

module.exports = checks