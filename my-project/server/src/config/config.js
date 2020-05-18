module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'curlysuccotash',
    user: process.env.DB_USER || 'curlysuccotash',
    password: process.env.DB_PASS || 'curlysuccotash',
    options: {
      dialect: process.env.DIALECT || 'sqlite', // what type of db connecting to
      host : process.env.HOST || 'localhost', // location of the db you want to connect
      storage: './curlysuccotash.sqlite' //where to store sqlite file
    }
  }
}
