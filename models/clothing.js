const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Clothing extends Model {};

Clothing.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        wardrobe_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'wardrobe',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'clothing'
    }
)

module.exports = Clothing;