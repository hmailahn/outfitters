const sequelize = require('../config/connection');
const seedUsers = require('./Userseed');
const seedWardrobe = require('./Wardrobeseed');
const seedClothing = require('./Clothingseed');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('----------')
    await seedUsers();
    console.log('----------')
    await seedWardrobe();
    console.log('----------')
    await seedClothing();
    process.exit(0)
};
seedAll()