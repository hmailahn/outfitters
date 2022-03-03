const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Footwear extends Model {}

Footwear.init( 
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            // validate: {
            //     isAlphanumeric
            // }
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
        modelName: 'footwear'
    }
);

module.exports = Footwear;