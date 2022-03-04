const User = require('../models/User')

const userData = [
    {
        username: "test",
        email: "test@gmail.com",
        password: "12345678"
    },
]

const seedUsers = () => User.bulkCreate(userData)

module.exports = seedUsers