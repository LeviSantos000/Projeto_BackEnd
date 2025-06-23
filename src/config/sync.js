// Sincronizando com o Banco de Dados
const connection = require('./connection')
require('../models/User')
require('../models/Product')
require('../models/Category')
require('../models/ProductCategory')
require('../models/ProductImage')
require('../models/ProductOption')

connection.sync()