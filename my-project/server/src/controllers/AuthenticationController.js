
/**
* Creating a new user record to store into db whenever someone hits this endpoint.
* Also its check fors any errors and send differents status if you mistake by registation or login
* @module AuthenticationController
*/
/**
 * import from models/index.js as attributes on this object
 * @type {any}
 * @const User
 *
 */
const {User} = require('../models')
/**
* try to register new user. return json object
* @callback register
*
*/
module.exports = {
  async register (req, res) { 
    try{
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch(err){
        res.status(400).send({
            error: 'This email account is already exist'
        })
    }
  },
/**
* try to login user. return json object
* @callback login
*
*/
  async login(req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })

      if (!user) {
        return res.status(403).send({
          error: 'The login information was incorrect'
        })
      }

      const isPasswordValid = password === user.password
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'The login information was incorrect'
        })
      }

      const userJson = user.toJSON()
      res.send({
        user: userJson
      })
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to log in'
      })
    }
  }
}