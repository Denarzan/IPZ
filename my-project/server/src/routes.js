const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const TestsController = require('./controllers/TestsController')

module.exports = (app) => {
  app.post('/register', // register endpoint
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login', // login endpoint which calls the authentication controller login method
    AuthenticationController.login)

  app.get('/tests', // tests endpoint 
    TestsController.index)

  app.get('/tests/:testId', 
    TestsController.show)

  app.put('/tests/:testId',
    TestsController.put)

  app.post('/tests', 
    TestsController.post)
} 
