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
  }
}