const {DataTypes, Model} = require('sequelize')
const connection = require('../config/connection')

class Users extends Model{}

Users.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        firstname: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        surname: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    },
    {   tableName: 'users',
        modelName: 'Users',
        timestamps: true,
        underscored: true,
        sequelize: connection
    }
)

module.exports = Users