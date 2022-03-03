// import all models
const Chestwear =  require('./Chestwear')
const Footwear =  require('./Footwear')
const Legwear =  require('./Legwear')
const Outfit =  require('./Outfit')
const User =  require('./User')
const Wardrobe = require('./Wardrobe')

// create associations
User.hasOne(Wardrobe, {
    foreignKey: ''
})

Wardrobe.belongsTo(User, {
    foreignKey: ''
})

Wardrobe.hasMany(Chestwear, {
    foreignKey:''
})

Chestwear.belongsTo(Wardrobe, {
    foreignKey:''
})

Wardrobe.hasMany(Legwear, {
    foreignKey:''
})

Legwear.belongsTo(Wardrobe, {
    foreignKey:''
})

Wardrobe.hasMany(Footwear, {
    foreignKey:''
})

Footwear.belongsTo(Wardrobe, {
    foreignKey:''
})

Wardrobe.hasMany(Outfit, {
    foreignKey:''
})

Outfit.belongsTo(Wardrobe, {
    foreignKey:''
})

module.exports = { Chestwear, Footwear, Legwear, Outfit, User, Wardrobe }