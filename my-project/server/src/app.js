console.log("Success rebuilt") 
const express = require('express') //подключение модулей
const bodyParser = require('body-parser')//allowing to process json data easily
const cors = require('cors')//переходит в папку, в package находит мейн и запускает lib/cors
const morgan = require('morgan')

const app = express() //build an express server
app.use(morgan('combined'))//pass a string of combined 
app.use(bodyParser.json())//allow our express app to easily parsany json requests that are sent in
app.use(cors())//allow to be hosted on a different domain

app.post('/register', (req, res) => {//return json object 
    res.send({
        message: 'Registration succesfully'
    })
})

app.listen(process.env.PORT || 8081)//app running on port 8081
