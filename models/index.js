// import all models
const User =  require('./User')
const Clothing = require('./Clothing')
const Outfit = require('./Outfit')
1// create associations
User.hasMany(Clothing, {
    foreignKey: 'user_id'
})

Clothing.belongsTo(User, {
    foreignKey: 'user_id'
})

Outfit.belongsTo(User, {
    foreignKey: "user_id"
})

User.hasMany(Outfit, {
    foreignKey: "user_id"
})
module.exports = { User, Clothing, Outfit }