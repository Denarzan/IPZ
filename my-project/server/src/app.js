/**
 * connects all modules we need to our project
 * @module connecting
 */
/**
 * connecting express.js
 * @type {any}
 * @const express
 */
/**
 * allowing to process json data easily
 * @type {any}
 * @const bodyParser
 */
/**
 * go to cors folder and inpackage finding main and run lib/cors
 * @type {any}
 * @const cors
 */
/**
 * models folder which has an index.js file which returns an object that has a sequelize attribute
 * @type {any}
 * @const sequelize
 */
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config')
/**
 *build an express server, pass a string of combined, allow our express app to easily parsany json requests that are sent in and 
 * allow to be hosted on a different domain
 * @type {any}
 * @const app
 */
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
require('./routes')(app)
/**
* connects sequelize to database and create a table of it's not exist
* @callback sequelize
* @param app - app running on port 8081
*/
sequelize.sync({ force: false })
    .then(() => {
        app.listen(config.port)
        console.log(`Server started on port ${config.port}`)
    })
