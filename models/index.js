// import all models
const User =  require('./User')
const Wardrobe = require('./Wardrobe')
const Clothing = require('./Clothing')

// create associations
User.hasOne(Wardrobe, {
    foreignKey: 'wardrobe_id'
})

Wardrobe.belongsTo(User, {
    foreignKey: 'wardrobe_id'
})

Wardrobe.hasMany(Clothing, {
    foreignKey: 'wardrobe_id'
})

Clothing.belongsTo(Wardrobe, {
    foreignKey: 'wardrobe_id'
})


module.exports = { User, Wardrobe, Clothing }