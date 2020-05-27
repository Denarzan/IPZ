const path = require('path')
/**
*connects sequelize to database and create a table if it's not exist
* @module Sequelizing
* 
*/


/**
* work with db
* @callback db
* @param {string | number} port - show port
* @param {string} user - user 
* @param {string} password - the user's password
* @callback options
* @param {string} dialect - what type of db connecting to 
* @param {string} host - location of the db we want to connect
* @param {string} storage - where to store sqlite file
*/

/**
 * authentificate user in db
 * @callback authentication
 * @param {string} jwtSecret - authentication key
 */
module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'curlysuccotash',
    user: process.env.DB_USER || 'curlysuccotash',
    password: process.env.DB_PASS || 'curlysuccotash',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host : process.env.HOST || 'localhost',
      storage: path.resolve(__dirname, '../../curlysuccotash.sqlite')
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
