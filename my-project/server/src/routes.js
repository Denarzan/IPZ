const AuthenticationController = require('./controllers/AuthenticationController')

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
module.exports = (app) => {
  app.post('/register', // register endpoint
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login', // login endpoint which calls the authentication controller login method
    AuthenticationController.login)
    
} 
