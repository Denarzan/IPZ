//use this seed folder to re-populate our db automatocally
const {
  sequelize,
  Test,
  User,
  Bookmark
} = require('../src/models') //models folder which has an index.js file which returns an object that has a sequelize attribute

const Promise = require('bluebird')
const tests = require('./tests.json')
const users = require('./users.json')
const bookmarks = require('./bookmarks.json')

sequelize.sync({ force: true }) //connects sequelize to database and create a table of it's not exist
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
//sequelize.sync({force: true}) - to clean db