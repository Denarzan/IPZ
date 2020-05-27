/**
 * we use seed folder to store our db and when we clear it to have posibility to re-populate db
 * @module SeedDb
 */

/**
 * connecting sequrlize to db
 * @type {any}
 * @const sequelize
 */
/**
 * connecting Test to db
 * @type {any}
 * @const Test
 *
 */
/**
 * connecting User to db
 * @type {any}
 * @const User
 *
 */
/**
 * connecting Bookmark to db
 * @type {any}
 * @const Bookmark
 *
 */
const {
  sequelize,
  Test,
  User,
  Bookmark
} = require('../src/models') 
/**
* connecting to our project bluebirds lib
* @type {any}
* @const Promise 
*/
/**
 * connecting to our project tests.json to have an access to tests in db
 * @type {any}
 * @const tests
 *
 */
/**
 * connecting to our project users.json to have an access to users in db
 * @type {any}
 * @const users
 *
 */
/**
 * connecting to our project bookmarks.json to have an access to bookmarks in db
 * @type {any}
 * @const bookmarks
 *
 */
const Promise = require('bluebird')
const tests = require('./tests.json')
const users = require('./users.json')
const bookmarks = require('./bookmarks.json')
/**
* connects sequelize to database and create a table of it's not exist
* we can clear db by force:true
* table have such raws like User, Test and Bookmark
* @callback sequelize
* @param User.create - creating new user
* @param Test.create - creating new test
* @param Bookmark.create - creating new bookmark
* 
*/
sequelize.sync({ force: true }) 
  .then(async function () {
    await Promise.all(
      users.map(user => {
        User.create(user)
      })
    )
    await Promise.all(
      tests.map(test => {
        Test.create(test)
      })
    )
    await Promise.all(
      bookmarks.map(bookmark => {
      Bookmark.create(bookmark)
      })
    )
  }
  )
