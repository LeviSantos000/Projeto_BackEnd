const express = require('express')
const CategoryController = require('../controllers/CategoryController')
const CategoryRoutes = express.Router()

const categoryController = new CategoryController

CategoryRoutes.get('/category/search', categoryController.listar)

module.exports = CategoryRoutes