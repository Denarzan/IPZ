//use this seed folder to re-populate our db automatocally
const {
  sequelize,
  Test,
  User,
  SavedTest
} = require('../src/models') //models folder which has an index.js file which returns an object that has a sequelize attribute

const Promise = require('bluebird')
const tests = require('./tests.json')
const users = require('./users.json')
const savedtests = require('./savedtests.json')

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
      savedtests.map(savedtest => {
        SavedTest.create(savedtest)
      })
    )
  }
  )
//sequelize.sync({force: true}) - to clean db