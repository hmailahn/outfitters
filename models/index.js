// import all models
const User =  require('./User')
const Clothing = require('./Clothing')

// create associations
User.hasMany(Clothing, {
    foreignKey: 'user_id'
})

Clothing.belongsTo(User, {
    foreignKey: 'User_id'
})

module.exports = { User, Clothing }