const {DataTypes, Model} = require('sequelize')
const connection = require('../config/connection')

class User extends Model{}

// Criação da tabela User
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        firstname: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        surname: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    },
    {   tableName: 'user',
        modelName: 'User',
        timestamps: true,
        underscored: true,
        sequelize: connection
    }
)

module.exports = User