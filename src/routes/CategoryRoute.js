const express = require('express')
const CategoryController = require('../controllers/CategoryController')
const CategoryRoutes = express.Router()

const categoryController = new CategoryController

CategoryRoutes.get('/category/search', categoryController.listar)
CategoryRoutes.get('/category/:id', categoryController.buscarPorId)
CategoryRoutes.post('/category', categoryController.criar)

module.exports = CategoryRoutes