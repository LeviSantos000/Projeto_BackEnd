const { DataTypes, Model } = require('sequelize')
const connection = require('../config/connection')
const Products = require('./Products')

class ProductsImages extends Model{
    static associate() {
        ProductsImages.belongsTo(Products, {foreignKey: 'product_id'})
    }
}

ProductsImages.init(
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
            },
            onDelete: 'CASCADE'
        },
        enabled: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: 0
        },
        path: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    },
    {
        tableName: 'products_images',
        modelName: 'ProductsImages',
        timestamps: false,
        underscored: true,
        sequelize: connection
    }
)

module.exports = ProductsImages