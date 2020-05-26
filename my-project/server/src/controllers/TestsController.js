// creating a new user record to store into db whenever someone hits this endpoint
const {Test} = require('../models') // import from models/index.js as attributes on this object
const {Op} = require('sequelize')

module.exports = {
  async index (req, res) { // find all the tests in db by the key and return back just 10 
    try {
      let tests = null
      const search = req.query.search
      if (search) {
        tests = await Test.findAll({
          where: {
            [Op.or]: [
              'subject', 'teacher', 'topic', 'author'
            ].map(key => ({
              [key]: {
                [Op.like]: `%${search}%`
              }
            }))
          }
        })
      } else {
        tests = await Test.findAll({
          limit: 10
        })
      }
      res.send(tests)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the tests'
      })
    }
  },
  async show (req, res) {  // show one test depending on it id
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
  async post(req, res) { // creating the test
    try {
      const test = await Test.create(req.body)
      res.send(test)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create the test'
      })
    }
  },
  async put(req, res) { // editing the test
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