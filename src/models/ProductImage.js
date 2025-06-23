const { DataTypes, Model } = require('sequelize')
const connection = require('../config/connection')

class ProductImage extends Model{
    static associate({Product}) {
        ProductImage.belongsTo(Product, { foreignKey: 'product_id' })
    }
}

// Criação da tabela ProductImage
ProductImage.init(
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
        tableName: 'product_image',
        modelName: 'Product_Image',
        timestamps: false,
        underscored: true,
        sequelize: connection
    }
)

module.exports = ProductImage