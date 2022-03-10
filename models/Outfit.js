const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Outfit extends Model {};

Outfit.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            refrences: {
                model: 'user',
                key: 'id'
            }
        },
        chestwear_id: {
            type: DataTypes.INTEGER,
            refrences: {
                model: 'clothing',
                key: 'id'
            }
        },
        legwear_id: {
            type: DataTypes.INTEGER,
            refrences: {
                model: 'clothing',
                key: 'id'
            }
        },
        footwear_id: {
            type: DataTypes.INTEGER,
            refrences: {
                model: 'clothing',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "outfit"
    }
)

module.exports = Outfit;