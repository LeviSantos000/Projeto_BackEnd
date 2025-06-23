const express = require('express')
const UserController = require('../controllers/UserController')
const UserRotas = express.Router()

const userController = new UserController

UserRotas.get('/users', userController.listar)
UserRotas.get('/users/:id', userController.buscarPorId)

module.exports = UserRotas