/**
 * creating a new user record to store into db tests whenever someone hits this endpoint
 * @module TestsController
 */
/**
 * import from models/index.js as attributes on this object
 * @type {any}
 * @const Test
 */
/**
 * connecting finding by different keys
 * @type {any}
 * @const Op
 */
const {Test} = require('../models') 
const {Op} = require('sequelize')
/**
* find all the tests in db by the key
* @callback index
*
*/
module.exports = {
  async index (req, res) { 
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
/**
* show one test depending on it id
* @callback show
*
*/
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
/**
* create a new test depending on it id
* @callback post
*
*/
  async post(req, res) {
    try {
      const test = await Test.create(req.body)
      res.send(test)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create the test'
      })
    }
  },
/**
* editing test depending on it id
* @callback put
*
*/
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