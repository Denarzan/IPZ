/**
 * file with db of users. each user must have its raws
 * @module User
 */
/**
* read through the current dir and give an array of files
* @callback Test
* @param {DataTypes.STRING} email - email of the user
* @param {string} password - password of the user
* @param unique - makes every value different
*/
module.exports = (sequelize, DataTypes) =>
  sequelize.define('User', {
    email: {
      type: DataTypes.STRING, 
      unique: true
    }, 
    password: DataTypes.STRING
  })
