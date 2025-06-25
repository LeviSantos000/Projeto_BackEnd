const express = require('express')
const CategoryController = require('../controllers/CategoryController')
const CategoryRoutes = express.Router()

const categoryController = new CategoryController

CategoryRoutes.get('/category/search', categoryController.listar)
CategoryRoutes.get('/category/:id', categoryController.buscarPorId)
CategoryRoutes.post('/category', categoryController.criar)
CategoryRoutes.put('/category/:id', categoryController.atualizar)
CategoryRoutes.delete('/category/:id', categoryController.deletar)

module.exports = CategoryRoutes