const router = require('express').Router()
const Authorization = require('../routes/middlewares/Authorization') // TODO: colocar middleware nas rotas necessarias

const GatewayController = require('../api/Controllers/GatewayController')


router.route('/send-to-api').post(GatewayController.sendToApi)

module.exports = router