// creating a new user record to store into db whenever someone hits this endpoint
const {User} = require('../models') // import from models/index.js as attributes on this object

module.exports = {
  async register (req, res) { // return json object 
    try{
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch(err){
        res.status(400).send({
            error: 'This email account is already exist'
        })
    }
  },
  async login(req, res) { // return user object 
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