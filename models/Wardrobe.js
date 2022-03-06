const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection')

class Wardrobe extends Model {}

Wardrobe.init(
    {   
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'wardrobe'
    }
);

module.exports = Wardrobe;