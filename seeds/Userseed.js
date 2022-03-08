const User = require('../models/User');

const userData = [
    {
        username: "test",
        email: "test@gmail.com",
        password: "12345678"
    },
    {
        username: "Agent-Shields",
        email: "johnathan.shields@gmail.com",
        password: "BadPassword"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers