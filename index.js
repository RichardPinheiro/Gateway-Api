const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const routes = require("./src/routes/routes")
const Config = require('./src/infra/cross-cutting/Config')
const { name } = require('./package.json')

app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.options('*', cors());
app.use(bodyParser.json())
app.use('/api', routes)

app.get('/', (req, res) => res.send('Hello World with Gateway Api'))

app.listen(Config.port, () => {
    console.log(`${name} server running on ${Config.port}`)
})