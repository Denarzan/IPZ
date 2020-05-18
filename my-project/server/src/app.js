const express = require('express') //подключение модулей
const bodyParser = require('body-parser')//allowing to process json data easily
const cors = require('cors')//переходит в папку, в package находит мейн и запускает lib/cors
const morgan = require('morgan')
const { sequelize } = require('./models') //models folder which has an index.js file which returns an object that has a sequelize attribute
const config = require('./config/config')

const app = express() //build an express server
app.use(morgan('combined'))//pass a string of combined..
app.use(bodyParser.json())//allow our express app to easily parsany json requests that are sent in
app.use(cors())//allow to be hosted on a different domain

require('./routes')(app)

sequelize.sync() //connects sequelize to database and create a table of it's not exist
    .then(() => {
        app.listen(config.port) //app running on port 8081
        console.log(`Server started on port ${config.port}`)
    })
