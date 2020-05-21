// creating a new user record to store into db whenever someone hits this endpoint
const {Test} = require('../models') // import from models/index.js as attributes on this object

module.exports = {
  async index(req, res) { // find all the tests in db and return back just 10 
    try {
      const tests = await Test.findAll({
        limit: 10
      })
      res.send(tests)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the tests'
      })
    }
  },
  async post(req, res) { // return user object 
    try {
      const test = await Test.create(req.body)
      res.send(test)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create the test'
      })
    }
  }
}