const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection')

class Wardrobe extends Model {}

Wardrobe.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        outfit: {
            type: DataTypes.INTEGER,
            // Not sure how to structure
        },
        chestwear: {
            type: DataTypes.INTEGER,
            // // Not sure how to structure
        },
        legwear: {
            type: DataTypes.INTEGER,
            // Not sure how to structure
        },
        footwear: {
            type: DataTypes.INTEGER,
            // // Not sure how to structure
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