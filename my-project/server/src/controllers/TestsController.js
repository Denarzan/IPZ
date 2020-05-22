// creating a new user record to store into db whenever someone hits this endpoint
const {Test} = require('../models') // import from models/index.js as attributes on this object

module.exports = {
  async index (req, res) { // find all the tests in db and return back just 10 
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
  async show (req, res) { 
    console.log(req.params.testId)
    try {
      const test = await Test.findOne({
        where: {
          id: req.params.testId
        }
      }) 
      res.send(test)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to show the test'
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
  },
  async put(req, res) { 
    try {
      const test = await Test.update(req.body, {
        where: {
          id: req.params.testId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to update the test'
      })
    }
  }
}