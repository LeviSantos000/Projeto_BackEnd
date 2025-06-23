const {DataTypes, Model} = require('sequelize')
const connection = require('../config/connection')

class Product extends Model{
    static associate({ProductImage, ProductOption, Category, ProductCategory}) {
        Product.hasMany(ProductImage, { foreignKey: 'product_id', a: 'images' })
        Product.hasMany(ProductOption, { foreignKey: 'product_id', as: 'options' })
        Product.belongsToMany(Category, {
            through: ProductCategory,
            foreignKey: 'product_id',
            otherKey: 'category_id',
            as: 'categories'
        })
    }
}

// Criação da tabela Product
Product.init(
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
        tableName: 'product',
        modelName: 'Product',
        timestamps: true,
        underscored: true,
        sequelize: connection
    }
)

module.exports = Product