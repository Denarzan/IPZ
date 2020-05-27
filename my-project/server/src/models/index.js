/**
 * main file which automatically read through all the models and set it up to be useful sequlize
 * @module cheking
 */
/**
 * reading through the file system
 * @type {any}
 * @const fs
 */
/**
 * conjunction (used for kind of dealing absolute path relatives)
 * @type {any}
 * @const path
 */
/**
 * to create and connect sequelize pbject to db
 * @type {any}
 * @const Sequelize
 */
const fs = require('fs') 
const path = require('path')
const Sequelize = require('sequelize') 
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)
/**
* reat through the current dir and give an array of files
* @callback fs
* @param model - give a full path to a file and then sequelize import it
* @param db - db.User = model
*/
fs
  .readdirSync(__dirname) 
  .filter((file) => 
    file !== 'index.js'
  )
  .forEach((file) =>{
    const model = sequelize.import(path.join(__dirname, file)) 
    db[model.name] = model  
  })
/**
* for each model that we find check if it has an associate method and then pass it the db object
*
* @callback Object
* 
*/
Object.keys(db).forEach(function (modelName) { 
  if ('associate' in db[modelName]) {         
    db[modelName].associate(db)              
  }
})
/**
* we have an access to the capital sequelize object
* @type {any}
* @const sequelize
*/
db.sequelize = sequelize 
db.Sequelize = Sequelize

module.exports = db