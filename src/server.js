const express = require('express')
const UserRoutes = require('./routes/UserRoute')

const app = express()
const host = 'localhost'
const port = 3000

app.use(express.json())
app.get('/', (request, response) => {
    response.send("Seja Bem Vindo ao Meu Projeto Back-End!")
})

app.use(UserRoutes)

app.listen(port, host, () => {
    console.log(`O servidor está executando em http://${host}:${port}`)
})