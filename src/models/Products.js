const {DataTypes, Model} = require('sequelize')
const connection = require('../config/connection')

class Products extends Model{}

Products.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        enabled: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        slug: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        use_in_menu: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        price_with_discount: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    },
    {
        tableName: 'products',
        modelName: 'Products',
        timestamps: true,
        underscored: true,
        sequelize: connection
    }
)

module.exports = Products