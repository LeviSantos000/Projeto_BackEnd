const { DataTypes, Model } = require('sequelize')
const connection = require('../config/connection')

class ProductOption extends Model{
    static associate({Product}) {
        ProductOption.belongsTo(Product, { foreignKey: 'product_id' })
    }
}

// Criação da tabela ProductOption
ProductOption.init(
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
                model: 'product',
                key: 'id'
            },
            onDelete: 'CASCADE'
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        shape: {
            type: DataTypes.ENUM('square', 'circle'),
            allowNull: true,
            defaultValue: 'square'
        },
        radius: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        type: {
            type: DataTypes.ENUM('text', 'color'),
            allowNull: true,
            defaultValue: 'text'
        },
        values: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    },
    {
        tableName: 'product_option',
        modelName: 'Product_Option',
        timestamps: false,
        underscored: true,
        sequelize: connection
    }
)

module.exports = ProductOption