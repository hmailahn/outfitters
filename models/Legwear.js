const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Legwear extends Model {}

Legwear.init( 
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
        modelName: 'legwear'
    }
);

module.exports = Legwear;