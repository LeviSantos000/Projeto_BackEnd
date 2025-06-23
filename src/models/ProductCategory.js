const {DataTypes, Model} = require('sequelize')
const connection = require('../config/connection')

class ProductCategory extends Model{
    static associate({Product, Category}) {
        ProductCategory.belongsTo(Product, { foreignKey: 'product_id' })
        ProductCategory.belongsTo(Category, { foreignKey: 'category_id' })
    }
}

// Criação da tabela ProductCategory
ProductCategory.init(
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
                model: 'product',
                key: 'id'
            },
            onDelete: 'CASCADE'
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'category',
                key: 'id'
            },
            onDelete: 'CASCADE'
        }
    },
    {
        tableName: 'product_category',
        modelName: 'Product_Category',
        timestamps: false,
        underscored: true,
        sequelize: connection
    }
)

module.exports = ProductCategory