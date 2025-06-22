const { DataTypes, Model} = require('sequelize')
const connection = require('../config/connection')

class Categories extends Model{}

Categories.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
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
            defaultValue: 0
        }
    },
    {
        tableName: 'categories',
        modelName: 'Categories',
        timestamps: true,
        underscored: true,
        sequelize: connection
    }
)

module.exports = Categories