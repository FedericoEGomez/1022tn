const express = require('express')
const router = express.Router()
const apiController = require('../controllers/apiController')
const {validarID} = require('../middlewares/validarId')
const checks = require('../middlewares/checks')
const {validarChecks} = require('../middlewares/validarChecks')



// motodo http - expresion URN - middleware - callback


router.get('/info', apiController.info)
router.get('/buscar/id/:id',validarID ,apiController.buscarPorId)
router.get('/buscar/modelo/:modelo', apiController.buscarPorModelo)
router.get('/buscar/marca', apiController.buscarPorMarca)
router.post('/crear',checks,validarChecks, apiController.crear)
router.put('/editar/:id',validarID,checks,validarChecks,apiController.editar)
router.delete('/eliminar/:id',validarID,apiController.eliminar)

module.exports = router