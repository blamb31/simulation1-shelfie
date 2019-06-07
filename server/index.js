const express = require('express')
const app = express()

const massive = require('massive')
require('dotenv').config()
let { SERVER_PORT, CONNECTION_STRING } = process.env
const PC = require('./controller')

massive(CONNECTION_STRING).then( db => {
    app.set('db', db)
})

app.use(express.json())



app.get('/api/products', PC.read)
app.post('/api/products', PC.create)

app.listen(SERVER_PORT, () => console.log(`Litening on port: ${SERVER_PORT}`))