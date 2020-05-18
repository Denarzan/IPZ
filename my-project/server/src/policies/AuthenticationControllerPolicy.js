//validating that certain requirements or data constraints pass or fail
const Joi = require('joi') //including the joi framework


module.exports = { // validate that email and password kind of match a couple of constrains
  register(req, res, next) { // req - request that comes in, res is what use to send smth back, 
    const schema = { // next what call to invoke next thing in the routes path
        email: Joi.string().email(), // what must have email
        password: Joi.string().regex( 
          new RegExp('^[a-zA-Z0-9]{8,32}$') // pass must have those symbols
        )
    }

    const {error, value} = Joi.validate(req.body, schema) // error

    if(error) { // cheking the errors
        switch (error.details[0].context.key) {
            case 'email': 
              res.status(400).send({
                  error: 'You must provide a valid email addres' // message what to do with email
              })
              break
            case 'password':
              console.log(value)
              res.status(400).send({ // message what to do with password(400-invalid syntax)
              error: `The password provided failed to match the following rules: 
                <br>
                1.It must contain only the following characters: lower case, upper case, numerics;
                <br>
                2.It must be at least 8 characters in length and not greater than 32 characters in length.
              `
              })
              break
            default: // other errors
              res.status(400).send({
                error: 'Invalid registration information'
              })
        }
    } else { // if everything is good
        next()
    }
  }
}
