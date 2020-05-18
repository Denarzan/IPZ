const fs = require('fs') // reading through the file system 
const path = require('path') // conjunction (used for kind of dealing absolute path relatives)
const Sequelize = require('sequelize') // to create and connect sequelize pbject to db
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

//automatically read through all the models and set it up to be useful sequlize
fs
  .readdirSync(__dirname) // reat through the current dir and give an array of files
  .filter((file) => 
    file !== 'index.js'
  )
  .forEach((file) =>{
    const model = sequelize.import(path.join(__dirname, file)) // give a full path to a file and then sequelize import it
    db[model.name] = model //db.User = model 
  })
  
db.sequelize = sequelize //we have an access to the capital sequelize object
db.Sequelize = Sequelize

module.exports = db