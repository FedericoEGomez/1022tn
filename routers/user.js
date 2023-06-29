const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const auth = require('../middlewares/auth')
const checks = require('../middlewares/checksLogin')
const {validarChecks} = require('../middlewares/validarChecks')
const validarToken = require('../middlewares/validarToken')

router.get('/session', userController.pruebaSession)
router.get('/test',auth, userController.testSession)
router.get('/cookie', userController.testCookie)
router.get('/borrar',userController.borrarSession)
router.get('/hash',userController.probandoHash)
router.get('/generartoken',userController.pruebaJwt)
router.get('/testtoken',validarToken,userController.pasoToken)

router.post('/login',checks,validarChecks,userController.login)
router.post('/logintoken',checks,validarChecks,userController.loginToken)
router.delete('/logout', userController.logout)

module.exports = router