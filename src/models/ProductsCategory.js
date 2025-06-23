const {DataTypes, Model} = require('sequelize')
const connection = require('../config/connection')
const Products = require('./Products')
const Categories = require('./Categories')

class Products_Category extends Model{}

Products_Category.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'products',
                key: 'id'
            }
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'categories',
                key: 'id'
            }
        }
    },
    {
        tableName: 'products_category',
        modelName: 'Products_Category',
        timestamps: false,
        underscored: true,
        sequelize: connection
    }
)

module.exports = Products_Category