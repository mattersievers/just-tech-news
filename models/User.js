const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
        //Table column definitions
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                //must be at least four characters long
                len:[4]
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        //don't pluralize the name
        freezeTableName: true,
        //use underscore vs. camel casing
        underscored: true,
        //keeps model name lowercase in database
        modelName: 'user'
    }
);

module.exports = User;