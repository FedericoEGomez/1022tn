const {check}= require('express-validator')

const checks = [
    check('marca')
        .notEmpty().withMessage('el campo marca es requerido')
        .isString().withMessage('el campo marca tiene que ser tipo string'),
    check('modelo')
        .notEmpty().withMessage('el campo modelo es requerido')
        .isString().withMessage('el campo modelo tiene que ser tipo string'),
    check('procesador')
        .notEmpty().withMessage('el campo procesador es requerido')
        .isString().withMessage('el campo procesador tiene que ser tipo string'),
    check('camaras')
        .notEmpty().withMessage('el campo camaras es requerido')
        .isString().withMessage('el campo camaras tiene que ser tipo string'),
    check('almacenamiento')
        .notEmpty().withMessage('el campo almacenamiento es requerido')
        .isString().withMessage('el campo almacenamiento tiene que ser tipo string'),
    check('ram')
        .notEmpty().withMessage('el campo ram es requerido')
        .isString().withMessage('el campo ram tiene que ser tipo string'),
    check('precio')
        .notEmpty().withMessage('el campo precio es requerido')
        .isNumeric().withMessage('el campo precio tiene que ser tipo number')
]

module.exports = checks