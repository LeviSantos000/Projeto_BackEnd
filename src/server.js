const express = require('express')
const UserRotas = require('./routes/UserRoute')
const app = express.Router()

const host = 'localhost'
const port = 3000

app.use(express.json())
app.get('/', (request, response) => {
    response.json("Seja Bem Vindo ao Meu Projeto Back-End!")
})

app.use(UserRotas)

app.listen(port, host, () => {
    console.log(`O servidor está executando em http://${host}:${port}`)
})