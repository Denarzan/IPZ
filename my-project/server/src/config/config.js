module.exports = {
  port: process.env.PORT || 8081, // port
  db: { // database
    database: process.env.DB_NAME || 'curlysuccotash', // name of db
    user: process.env.DB_USER || 'curlysuccotash', // user
    password: process.env.DB_PASS || 'curlysuccotash', // password
    options: {
      dialect: process.env.DIALECT || 'sqlite', // what type of db connecting to
      host : process.env.HOST || 'localhost', // location of the db you want to connect
      storage: './curlysuccotash.sqlite' //where to store sqlite file
    }
  },
  authentication: { // authentication key
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
