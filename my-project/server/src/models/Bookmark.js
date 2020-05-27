/**
 * create a new Bookmark depending on user and test id
 * @module Bookmark
 */
/**
 * define Bookmark in db
 * @type {any}
 * @const Bookmark
 */
module.exports = (sequelize, DataTypes) => {
    const Bookmark = sequelize.define('Bookmark', {})
/**
* check if bookmark has user and test id
* @callback Bookmark
*
*/
    Bookmark.associate = function (models) {
        Bookmark.belongsTo(models.User)
        Bookmark.belongsTo(models.Test)
    }
    return Bookmark
}