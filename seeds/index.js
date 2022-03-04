// const clothingSeed = require("./Clothingseed")
const userSeed = require('./Userseed')
// const wardrobeSeed = require('./WardrobeSeed')

const sequelize = require('../config/connection');
const seedUsers = require('./Userseed');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('----------')
    await seedUsers();
    // console.log('----------')
    // await wardrobeSeed();
    // console.log('----------')
    // await clothingSeed();
    process.exit(0)
}
seedAll()