const express = require('express')
const UserController = require('../controllers/UserController')
const UserRoutes = express.Router()

const userController = new UserController

UserRoutes.get('/users', userController.listar)
UserRoutes.get('/users/:id', userController.buscarPorId)
UserRoutes.post('/users', userController.criar)
UserRoutes.put('/users/:id', userController.atualizar)
UserRoutes.delete('/users/:id', userController.deletar)

module.exports = UserRoutes