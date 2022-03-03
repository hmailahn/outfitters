const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Outfit extends Model {}

Outfit.init( 
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        chestwear_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'chestwear',
                key: 'id'
            }
        },
        legwear_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'legwear',
                key: 'id'
            }
        },
        footwear_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'footwear',
                key: 'id'
            }
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
        modelName: 'outfit'
    }
);

module.exports = Outfit;