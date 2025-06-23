const { DataTypes, Model} = require('sequelize')
const connection = require('../config/connection')

class Category extends Model{
    static associate({Product, ProductCategory}) {
        Category.belongsToMany(Product, {
            through: ProductCategory,
            foreignKey: 'category_id',
            otherKey: 'product_id',
            as: 'products'
        })
    }
}

// Criação da tabela Category
Category.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        slug: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        use_in_menu: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: 0
        }
    },
    {
        tableName: 'category',
        modelName: 'Category',
        timestamps: true,
        underscored: true,
        sequelize: connection
    }
)

module.exports = Category