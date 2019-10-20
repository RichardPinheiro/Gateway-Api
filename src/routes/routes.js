const router = require('express').Router()
const Authorization = require('../routes/middlewares/Authorization') // TODO: colocar middleware nas rotas necessarias
// const personController = require('../Controllers/PersonController')
// const newsController = require('../Controllers/NewsController')
// const phrasesController = require('../Controllers/PhrasesController')
// const filesController = require('../Controllers/FilesController')
// const backgroundController = require('../Controllers/BackgroundController')
// const screenController = require('../Controllers/ScreenController')

const GatewayController = require('../api/Controllers/GatewayController')


router.route('/send-to-api').get(GatewayController.sendToApi)

// router.route('/person/save').post(personController.create)
// router.route('/person/login').post(personController.login)
// router.route('/person').get(personController.find)
// router.route('/person/:id').delete(personController.deleteOne)
// router.route('/birthday/day').get(personController.birthdaysOfDay)
// router.route('/birthday/others').get(personController.othersBirthdays)
// router.route('/news/save').post(newsController.create)
// router.route('/news').get(newsController.news)
// router.route('/person/:id').patch(personController.patch)
// router.route('/news/:id').delete(newsController.deleteOne)
// router.route('/phrases/save').post(phrasesController.create)
// router.route('/phrases').get(phrasesController.phrases)
// router.route('/phrases/:id').delete(phrasesController.deleteOne)

// router.route('/files/:id').get(filesController.get)
// router.route('/files').post(filesController.create)
// router.route('/files/:id').delete(filesController.deleteOne)
// router.route('/files/:id/serve').get(filesController.serve)

// router.route('/backgrounds').post(backgroundController.create)
// router.route('/backgrounds').get(backgroundController.find)
// router.route('/backgrounds/:id').delete(backgroundController.deleteOne)

// router.route('/screens').get(screenController.find)

module.exports = router