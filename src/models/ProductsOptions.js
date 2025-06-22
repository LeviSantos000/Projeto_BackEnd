const { DataTypes, Model } = require('sequelize')
const connection = require('../config/connection')
const Products = require('./Products')

class ProductsOptions extends Model{
    static associate() {
        Products.hasMany(ProductsOptions, {foreignKey: 'product_id'})
        ProductsOptions.belongsTo(Products, {foreignKey: 'product_id'})
    }
}

ProductsOptions.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'products',
                key: 'id'
            }
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        shape: {
            type: DataTypes.ENUM,
            allowNull: true,
            defaultValue: 'square'
        },
        radius: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        type: {
            type: DataTypes.ENUM,
            allowNull: true,
            defaultValue: 'text'
        },
        values: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    },
    {
        tableName: 'products_options',
        modelName: 'ProductsOptions',
        timestamps: false,
        underscored: true,
        sequelize: connection
    }
)

module.exports = ProductsOptions